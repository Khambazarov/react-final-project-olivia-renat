# Webshop

#### used tecnologies

- useQuery
- useParams
- localStorage
- build own API ( English | German)

```js
const menuEng = [
  {
    id: "1",
    name: "Spaghetti Bolognese",
    category: "Main Course",
    price: 12_99,
    description: "Classic Italian pasta with rich bolognese sauce",
    availability: true,
    allergens: ["gluten", "dairy"],
  },
  {
    id: "2",
    name: "Caesar Salad",
    category: "Appetizer",
    price: 6_99,
    description: "Fresh romaine lettuce with Caesar dressing and croutons",
    availability: true,
    allergens: ["dairy", "egg"],
  },
];

const menuDe = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    category: "Hauptgericht",
    price: 12_99,
    description:
      "Klassische italienische Pasta mit reichhaltiger Bolognese-Sauce",
    availability: true,
    allergens: ["gluten", "milchprodukte"],
  },
  {
    id: 2,
    name: "Caesar Salat",
    category: "Vorspeise",
    price: 6_99,
    description: "Frischer Römersalat mit Caesar-Dressing und Croutons",
    availability: true,
    allergens: ["milchprodukte", "ei"],
  },
];
```

#### user options

- Home | Menu | About Us | Find Us | Contact ( formspree )
- Menu => login | registration
  - cart ( formspree )
- logout

---