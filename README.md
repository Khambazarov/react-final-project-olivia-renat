# Webshop

## Used Technologies

- React
- React Router
- useQuery
- useParams
- localStorage
- Formspree
- Own API (English | German)

## Libraries

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.27.0
- `@formspree/react`: ^2.5.1

## Features

- Multilingual support (English and German)
- User login and registration
- Shopping cart with local storage functions
- Contact form via Formspree
- Dynamic menu display based on categories and dishes
- Price calculation and display in the cart and checkout

## Example Menus

### English Menu

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
];
```

### German Menu

```js
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
];
```

## User Options

- Home
- Menu
- About Us
- Find Us
- Contact (Formspree)
- Menu => Login | Registrierung
  - Cart (Formspree)
- Logout

## Installation and Usage

##### Clone repository:

```sh
git clone https://github.com/fbw-24-d02b/react-final-project-olivia-renat
```

```sh
cd react-final-project-olivia-renat
```

```sh
npm install
```

```sh
npm run dev
```
