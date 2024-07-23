import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMaps";

const customMap = new CustomMap("map");
customMap.addMarker(new User());
customMap.addMarker(new Company());

