// intructions on how other classes can suffice with Mappable;
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent?(): string;
  color?: string;
}

export class CustomMap {
  // we can't reference this property google.maps outside of this class.
  private googleMap: google.maps.Map;
  // private marker: google.maps.Marker;

  constructor(public divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  private addInfoWindow(marker: google.maps.Marker): void {
    const contentString = '<div>Hello World!</div>';

    const infoWindow = new google.maps.InfoWindow({
      position: marker.getPosition(),
      content: contentString,
    });

    marker.addListener('click', () => {
      infoWindow.open(marker.getMap(), marker);
    });
  }

  public addMarker(entity: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: entity.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.getMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
