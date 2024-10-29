export type MenuDe = {
  title: string;
  path: string;
  description: string;
  img: string;
  dishes: {
    id: number;
    name: string;
    price: string;
    description: string;
    availability: boolean;
    allergens: string[];
    img: string;
  }[];
};

export const menuDe: MenuDe[] = [
  {
    title: "Hauptgericht",
    path: "hauptgericht",
    description:
      "Eine Auswahl an köstlichen Hauptgerichten, die mit frischen Zutaten und Liebe zubereitet werden. Unsere Gerichte reichen von herzhaften Fleisch- und Fischoptionen bis hin zu vegetarischen und veganen Kreationen, die jeden Gaumen erfreuen.",
    img: "https://images.pexels.com/photos/3791089/pexels-photo-3791089.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: 1,
        name: "Spaghetti Bolognese",
        price: "12_99",
        description:
          "Klassische italienische Pasta mit reichhaltiger Bolognese-Sauce",
        availability: true,
        allergens: ["gluten", "milchprodukte"],
        img: "https://images.pexels.com/photos/28575312/pexels-photo-28575312/free-photo-of-traditionelle-spaghetti-bolognese-mit-frischen-zutaten.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 4,
        name: "Pizza Margherita",
        price: "10_99",
        description:
          "Klassische Pizza mit Tomatensauce, Mozzarella und Basilikum",
        availability: true,
        allergens: ["gluten", "milchprodukte"],
        img: "https://images.pexels.com/photos/19602378/pexels-photo-19602378/free-photo-of-sauerteigpizza-margherita-zeit.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 5,
        name: "Gegrillter Lachs",
        price: "14_99",
        description: "Perfekt gegrillter Lachs mit Zitronen-Buttersauce",
        availability: true,
        allergens: ["fisch"],
        img: "https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 6,
        name: "Veganer Burger",
        price: "11_99",
        description:
          "Pflanzlicher Patty mit Salat, Tomate und veganer Mayonnaise",
        availability: true,
        allergens: ["gluten"],
        img: "https://images.pexels.com/photos/6546033/pexels-photo-6546033.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 9,
        name: "Garnelen-Tacos",
        price: "12_49",
        description:
          "Würzige Garnelen-Tacos mit frischer Salsa und cremiger Sauce",
        availability: true,
        allergens: ["schalentiere", "gluten"],
        img: "https://images.pexels.com/photos/27365309/pexels-photo-27365309/free-photo-of-mexikanisches-restaurant.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 13,
        name: "Rindfleisch-Tacos",
        price: "10_49",
        description: "Weiche Tacos mit gewürztem Rindfleisch, Käse und Salat",
        availability: true,
        allergens: ["gluten", "milchprodukte"],
        img: "https://images.pexels.com/photos/7613555/pexels-photo-7613555.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 14,
        name: "Penne Alfredo",
        price: "11_99",
        description:
          "Penne-Nudeln in einer cremigen Alfredo-Sauce mit Parmesan",
        availability: true,
        allergens: ["gluten", "milchprodukte"],
        img: "https://images.pexels.com/photos/29042359/pexels-photo-29042359/free-photo-of-kostliche-pesto-penne-nudeln-in-elegantem-ambiente.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 17,
        name: "Muschelsuppe",
        price: "9_99",
        description: "Cremige Muschelsuppe mit Kartoffeln und Sellerie",
        availability: true,
        allergens: ["schalentiere", "milchprodukte"],
        img: "https://images.pexels.com/photos/16357831/pexels-photo-16357831/free-photo-of-lebensmittel-essen-mahlzeit-schussel.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Vorspeise",
    path: "vorspeise",
    description:
      "Eine köstliche Auswahl an Vorspeisen, die Ihre Geschmacksnerven beleben. Von knusprigen Häppchen bis zu erfrischenden Salaten, jedes Gericht wird mit hochwertigen Zutaten zubereitet, ideal zum Teilen oder für den eigenen Genuss.",
    img: "https://images.pexels.com/photos/39826/chunks-wreak-menu-gastronomy-39826.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: 2,
        name: "Caesar-Salat",
        price: "6_99",
        description: "Frischer Römersalat mit Caesar-Dressing und Croutons",
        availability: true,
        allergens: ["milchprodukte", "ei"],
        img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 8,
        name: "Knoblauchbrot",
        price: "3_99",
        description: "Getoastetes Baguette mit Knoblauchbutter und Kräutern",
        availability: true,
        allergens: ["gluten", "milchprodukte"],
        img: "https://images.pexels.com/photos/1460860/pexels-photo-1460860.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 15,
        name: "Griechischer Salat",
        price: "7_99",
        description: "Salat mit Gurke, Tomaten, Oliven und Feta-Käse",
        availability: true,
        allergens: ["milchprodukte"],
        img: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 20,
        name: "Avocado-Toast",
        price: "6_49",
        description:
          "Getoastetes Brot mit zerdrückter Avocado und einem Hauch von Limette",
        availability: true,
        allergens: ["gluten"],
        img: "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Nachspeise",
    path: "nachspeisen",
    description:
      "Genießen Sie unsere dekadenten Desserts, die Ihr Verlangen nach Süßem stillen. Von reichhaltigen Schokoladenkuchen bis hin zu leichten Obsttorten – jede Kreation wird mit Liebe und den besten Zutaten zubereitet, um ein köstliches Ende Ihres Essens zu garantieren.",
    img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: 3,
        name: "Schokoladenkuchen",
        price: "5_99",
        description: "Reichhaltiger und saftiger Schokoladenkuchen",
        availability: true,
        allergens: ["gluten", "milchprodukte", "nüsse"],
        img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 10,
        name: "Käsekuchen",
        price: "6_99",
        description: "Cremiger Käsekuchen mit Keksboden",
        availability: true,
        allergens: ["milchprodukte", "gluten"],
        img: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 16,
        name: "Obstschale",
        price: "4_49",
        description: "Frische saisonale Früchte in einer Schale serviert",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 18,
        name: "Veganer Schokoladenpudding",
        price: "5_49",
        description: "Reichhaltiger und cremiger veganer Schokoladenpudding",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Getränke",
    path: "getraenke",
    description:
      "Eine erfrischende Auswahl an Getränken, die Ihr Essen perfekt ergänzen. Von revitalisierenden Smoothies und frisch gepressten Säften bis hin zu erlesenen Weinen und Craft-Bieren – jedes Getränk ist darauf ausgelegt, Ihr kulinarisches Erlebnis zu bereichern.",
    img: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: 7,
        name: "Mango-Smoothie",
        price: "4_99",
        description:
          "Erfrischender Mango-Smoothie aus frischen Mangos und Mandelmilch",
        availability: true,
        allergens: ["nüsse"],
        img: "https://images.pexels.com/photos/4955257/pexels-photo-4955257.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 19,
        name: "Eiskaffee",
        price: "4_49",
        description: "Gekühlter Espresso mit Milch und Eis",
        availability: true,
        allergens: ["milchprodukte"],
        img: "https://images.pexels.com/photos/29095101/pexels-photo-29095101/free-photo-of-eiskaffee-auf-holztisch-im-cafe-ambiente.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 21,
        name: "Mineralwasser",
        price: "2_49",
        description: "Erfrischendes Mineralwasser, still oder sprudelnd",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/593099/pexels-photo-593099.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 22,
        name: "Orangensaft",
        price: "3_49",
        description: "Frisch gepresster Orangensaft",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 23,
        name: "Grüner Tee",
        price: "2_99",
        description: "Eine heiße Tasse grüner Tee, aromatisch und beruhigend",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 24,
        name: "Rotwein",
        price: "5_99",
        description: "Feiner Rotwein, ideal zum Hauptgang",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/95960/pexels-photo-95960.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 25,
        name: "Bier",
        price: "4_49",
        description: "Gekühltes Bier, frisch gezapft",
        availability: true,
        allergens: ["gluten"],
        img: "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Beilagen",
    path: "beilagen",
    description:
      "Bereichern Sie Ihr Essen mit unserer köstlichen Auswahl an Beilagen. Jede Option wird so zubereitet, dass sie Ihr Hauptgericht ergänzt, mit frischem Gemüse, geschmackvollen Körnern und klassischen Beilagen, die Textur und Geschmack zu Ihrem kulinarischen Erlebnis hinzufügen.",
    img: "https://images.pexels.com/photos/5203696/pexels-photo-5203696.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: 11,
        name: "Pommes Frites",
        price: "3_49",
        description: "Knusprige, goldbraune Pommes Frites, leicht gesalzen",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: 12,
        name: "Hühnerflügel",
        price: "8_99",
        description: "Würzige Hühnerflügel mit Ranch-Dip",
        availability: true,
        allergens: ["milchprodukte"],
        img: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
];
