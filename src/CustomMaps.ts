export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

// Belli özellikleri kullanmak için ve güvenlik için CustomMap sınıfı oluşturuldu.
// Bu sınıfın içinde googleMap adında bir özellik tanımlandı ve bu özelliğin tipi google.maps.Map olarak belirlendi.
// Bu özelliğin değeri constructor içinde tanımlandı ve bu değer new google.maps.Map() olarak belirlendi.
// Bu değer alırken document.getElementById() fonksiyonu kullanıldı ve bu fonksiyonun içine divId parametresi verildi.
// Bu fonksiyonun döndürdüğü değer bir HTMLElement olduğu için as HTMLElement şeklinde bir dönüşüm yapıldı.
// Bu dönüşümün sebebi TypeScript'in bu değeri bir HTMLElement olarak görmesini sağlamaktır.
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // burada addMaerker diye func yazdık
  // bu func Mapable tipinde bir parametre alıyor
  // bu func içine alınan değerler eğer gelen değerde varsa çalışıyor
  // bu değerlerin içinde location adında bir özellik varsa çalışıyor
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
