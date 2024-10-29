import { NavLink, Outlet } from "react-router-dom";
import {
  menuEng,
  // MenuDe
} from "../../API/menuEng";

export function Menu() {
  function menuPath(path: string) {
    return menuEng
      .filter((item) => item.path === path)
      .map(({ title, path, img }) => (
        <NavLink to={path} key={path}>
          <h2>{title}</h2>
          <img src={img} alt={title} />
        </NavLink>
      ));
  }

  return (
    <>
      {menuPath("main-course")}
      {menuPath("appetizer")}
      {menuPath("dessert")}
      {menuPath("beverage")}
      {menuPath("side")}
      <Outlet />
    </>
  );
}
