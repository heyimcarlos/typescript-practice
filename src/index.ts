import { User } from './User';
import { CustomMap } from './CustomMap';
import { Company } from './Company';

const map = new CustomMap('map');

const carlos = new User();
const ntornos = new Company();

map.addMarker(carlos);
map.addMarker(ntornos);
