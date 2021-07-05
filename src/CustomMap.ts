// intructions on how other classes can suffice with Mappable;
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // we can't reference this property google.maps outside of this class.
  private googleMap: google.maps.Map;

  constructor(public divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  public addMarker(latLng: Mappable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: latLng.location,
    });
  }
}
