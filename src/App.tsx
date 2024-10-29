import { NavLink, Routes, Route, Outlet, Navigate } from "react-router-dom";

import { Home } from "./components/Home";
import { Menu } from "./components/menu/Menu";
import { AboutUs } from "./components/AboutUs";
import { FindUs } from "./components/FindUs";
import { Contact } from "./components/Contact";
import { MainCourse } from "./components/menu/MainCourse";
import { Appetizer } from "./components/menu/Appetizer";
import { Dessert } from "./components/menu/Dessert";
import { Beverage } from "./components/menu/Beverage";
import { Side } from "./components/menu/Side";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home...</NavLink>
          </li>
          <li>
            <NavLink to="menu">Menu...</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About Us...</NavLink>
          </li>
          <li>
            <NavLink to="find-us">FindUs...</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact...</NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />}>
          <Route path="main-course" element={<MainCourse />}>
            {/* <Route path=":id" element={<MainCourse />} /> */}
          </Route>
          <Route path="appetizer" element={<Appetizer />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="beverage" element={<Beverage />} />
          <Route path="side" element={<Side />} />
        </Route>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="find-us" element={<FindUs />} />
        <Route path="contact" element={<Contact />} />

        {/* catch all other not found pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
