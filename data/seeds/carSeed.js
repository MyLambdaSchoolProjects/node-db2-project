exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "WA1VMAFE5AD771206",
          make: "Volkswagen",
          model: "Passat",
          mileage: 52217.1
        },
        {
          vin: "JM1DE1KY8D0150343",
          make: "Mitsubishi",
          model: "Eclipse",
          mileage: 36329.4
        },
        {
          vin: "KMHHT6KJ8FU143682",
          make: "GMC",
          model: "Envoy XL",
          mileage: 55314.3
        },
        {
          vin: "WAUJT58E83A308859",
          make: "Buick",
          model: "Lucerne",
          mileage: 76359.4
        },
        {
          vin: "3C4PDCEG5ET285170",
          make: "Chrysler",
          model: "Town & Country",
          mileage: 30855.3
        },
        {
          vin: "5TDDK3DC3FS954457",
          make: "BMW",
          model: "7 Series7",
          mileage: 6751.1
        },
        {
          vin: "1N6AF0KX9FN563411",
          make: "Volkswagen",
          model: "Cabriolet",
          mileage: 57038.2
        },
        {
          vin: "WBA3V7C51EJ492261",
          make: "Infiniti",
          model: "Q",
          mileage: 24512.7
        },
        {
          vin: "3GYFNEEY2AS295081",
          make: "Hyundai",
          model: "Sonata",
          mileage: 37934.1
        },
        {
          vin: "1G6DD8E32E0210455",
          make: "Chevrolet",
          model: "Avalanche 1500",
          mileage: 23593.0
        },
        {
          vin: "JTHKD5BH0B2331700",
          make: "Toyota",
          model: "Venza",
          mileage: 60693.6
        },
        {
          vin: "JH4NA21614S187713",
          make: "Daewoo",
          model: "Lanos",
          mileage: 20618.6
        },
        {
          vin: "2C3CDZAT7FH558094",
          make: "BMW",
          model: "M5",
          mileage: 33121.9
        },
        {
          vin: "1D7RV1GP3AS098731",
          make: "Saturn",
          model: "Outlook",
          mileage: 36447.4
        },
        {
          vin: "1G6AH5RX5D0998567",
          make: "BMW",
          model: "Alpina B7",
          mileage: 56545.7
        },
        {
          vin: "WVGEP9BP7FD145727",
          make: "Acura",
          model: "TSX",
          mileage: 75672.9
        },
        {
          vin: "WA1WKAFP9BA814251",
          make: "Mercury",
          model: "Villager",
          mileage: 51772.8
        },
        {
          vin: "2HNYD18851H648867",
          make: "Oldsmobile",
          model: "Bravada",
          mileage: 54213.2
        },
        {
          vin: "KNDPB3A26B7387772",
          make: "Nissan",
          model: "Altima",
          mileage: 45599.8
        },
        {
          vin: "JTDKN3DU7A0323939",
          make: "Lincoln",
          model: "Navigator",
          mileage: 53036.8
        },
        {
          vin: "WBA3A5G52FN600570",
          make: "Aston Martin",
          model: "DB9",
          mileage: 19271.4
        },
        {
          vin: "1D7RV1GP8AS693686",
          make: "Nissan",
          model: "Altima",
          mileage: 55812.3
        },
        {
          vin: "WA1LKBFPXAA657840",
          make: "GMC",
          model: "Safari",
          mileage: 70114.7
        },
        {
          vin: "1FTEW1C84FK788500",
          make: "Foose",
          model: "Hemisfear",
          mileage: 47470.5
        },
        {
          vin: "YV440MBK9F1637959",
          make: "Aston Martin",
          model: "Rapide",
          mileage: 66624.3
        }
      ]);
    });
};
