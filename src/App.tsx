import { NavLink, Routes, Route, Outlet, Navigate } from "react-router-dom";

import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { AboutUs } from "./components/AboutUs";
import { FindUs } from "./components/FindUs";
import { Contact } from "./components/Contact";

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
        <Route path="menu" element={<Menu />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="find-us" element={<FindUs />} />
        <Route path="contact" element={<Contact />} />

        {/* catch not found pages ( menu/ | about-us/ | find-us/ | contact/ ) */}
        <Route path="menu/*" element={<Navigate to="" />} />
        <Route path="about-us/*" element={<Navigate to="" />} />
        <Route path="find-us/*" element={<Navigate to="" />} />
        <Route path="contact/*" element={<Navigate to="" />} />

        {/* catch all other not found pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
