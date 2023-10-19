const carList = [
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/abarth1.png",
    name: "Abarth",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/acura.png",
    name: "Acura",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/alfa_romeo.png",
    name: "Alfa Romeo",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/ariel.png",
    name: "Ariel",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/aston_martin.png",
    name: "Aston Martin",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/audi.png",
    name: "Audi",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/bentley.png",
    name: "Bentley",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/bmw.png",
    name: "BMW",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/bugatti.png",
    name: "Bugatti",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/buick.png",
    name: "Buick",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/cadillac.png",
    name: "Cadillac",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/chevrolet.png",
    name: "Chevrolet",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/chrysler.png",
    name: "Chrysler",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/citroen.png",
    name: "Citroën",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/dacia.png",
    name: "Dacia",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/dodge.png",
    name: "Dodge",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/ferrari.png",
    name: "Ferrari",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/fiat.png",
    name: "Fiat",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/ford.png",
    name: "Ford",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/10/holden.png",
    name: "Holden",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/honda.png",
    name: "Honda",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/hummer.png",
    name: "Hummer",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/hyundai.png",
    name: "Hyundai",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/inf.png",
    name: "Infiniti",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/jagu.png",
    name: "Jaguar",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/jeep.png",
    name: "Jeep",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/kia.png",
    name: "Kia",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/koenigsegg.png",
    name: "Koenigsegg",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/lada.png",
    name: "Lada",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/lamb.png",
    name: "Lamborghini",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/lancia.png",
    name: "Lancia",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/land-rover.png",
    name: "Land Rover",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/lexus.png",
    name: "Lexus",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/linc.png",
    name: "Lincoln",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/lotus.png",
    name: "Lotus",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/mase.png",
    name: "Maserati",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/maybach.png",
    name: "Maybach",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/mazda.png",
    name: "Mazda",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/mclaren.png",
    name: "Mclaren",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/marchedrs.png",
    name: "Mercedes",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/mini.png",
    name: "Mini",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/mitub.png",
    name: "Mitsubishi",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/nissan.png",
    name: "Nissan",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/opel.png",
    name: "Opel",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/pagani.png",
    name: "Pagani",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/peug.png",
    name: "Peugeot",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/porsche.png",
    name: "Porsche",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/renault.png",
    name: "Renault",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/rolls-royce.png",
    name: "Rolls Royce",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/saab.png",
    name: "Saab",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/seat.png",
    name: "Seat",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/skoda.png",
    name: "Skoda",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/smart.png",
    name: "Smart",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/subaru.png",
    name: "Subaru",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/suzuki.png",
    name: "Suzuki",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/tesla.png",
    name: "Tesla",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/toyota.png",
    name: "Toyota",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/vauxhall.png",
    name: "Vauxhall",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/volkswagen.png",
    name: "Volkswagen",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2022/08/volvo.png",
    name: "Volvo",
  },
];

export default carList;
