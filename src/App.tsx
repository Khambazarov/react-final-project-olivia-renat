import {
  NavLink,
  Routes,
  Route,
  Outlet,
  // , Navigate
} from "react-router-dom";

import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { FindUs } from "./components/FindUs";
import { Contact } from "./components/Contact";
import { PageNotFound } from "./components/PageNotFound";

import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

import { Menu } from "./components/menu/Menu";
import { Dishes } from "./components/menu/Dishes";
import { DishDetails } from "./components/menu/DishDetails";

import "./App.css";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
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
        <Route path="checkout" element={<Checkout />} />

        {/* catch all other not found pages */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
