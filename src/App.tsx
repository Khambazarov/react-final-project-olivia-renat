import { NavLink, Routes, Route, Outlet, Navigate } from "react-router-dom";

import { Home } from "./components/Home";
import { Menu } from "./components/menu/Menu";
import { AboutUs } from "./components/AboutUs";
import { FindUs } from "./components/FindUs";
import { Contact } from "./components/Contact";

import { Dishes } from "./components/menu/Dishes";
import { DishDetails } from "./components/menu/DishDetails";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="find-us">FindUs</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="cart">
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />}>
          <Route path=":category" element={<Dishes />}>
            <Route path=":dishPath" element={<DishDetails />} />
          </Route>
        </Route>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="find-us" element={<FindUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />

        {/* catch all other not found pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

function Cart() {
  const cartProduct = JSON.parse(localStorage.getItem("products") || "[]");

  function totalProductPrice(price: string, count: string) {
    const replaceUnderscoreToDot = price.replace("_", "");
    return (Number(replaceUnderscoreToDot) * Number(count)) / 100;
  }

  function totalPrice() {
    let price = 0;
    cartProduct.map(
      (product: { id: string; name: string; price: string; count: string }) => {
        price += totalProductPrice(product.price, product.count);
      }
    );
    console.log(price);
    return price;
  }

  return (
    <>
      {cartProduct.length > 0 ? (
        <>
          {cartProduct.map(
            (product: {
              id: string;
              name: string;
              price: string;
              count: string;
            }) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <div>Product Price: {product.price.replace("_", ",")}€</div>
                <div>Amount: {product.count}</div>
                <div>
                  Price: {totalProductPrice(product.price, product.count)}€
                </div>
              </div>
            )
          )}
          <div>Total Price: {totalPrice()}€</div>
        </>
      ) : (
        <div>Cart is empty</div>
      )}
    </>
  );
}

export default App;
