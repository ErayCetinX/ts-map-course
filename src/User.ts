// User Class olduğu için büyük harfle başlattık
import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMaps";

// implements classın hangi özellikleri alacağını söylüyor
// ortak interfacec var company ve user kullandığı bunlar CustomMap classına bağlı
// CustomMap interface eklediğimiz her özellik buradada kendisini gösterecektir

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
