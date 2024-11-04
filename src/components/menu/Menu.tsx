import "./Menu.css";

import { Fragment } from "react/jsx-runtime";
import { NavLink, Outlet, useParams } from "react-router-dom";
import {
  menuEng,
  // MenuDe
} from "../../API/menuEng";
import { Button } from "../Button";

export function Menu() {
  const { category } = useParams();

  return (
    <div>
      <a className="scroll-top" href="#">
        <Button text="To Top" />
      </a>
      <h1>Categories</h1>
      {menuEng.map(({ title, path, img, description }) => (
        <Fragment key={path}>
          <div className="categories">
            <NavLink to={path === category ? "/menu" : path}>
              <h2>{title}</h2>
              <p>{description}</p>
              <img className="category-img" src={img} alt={title} />
            </NavLink>
          </div>
          {category === path && <Outlet />}
        </Fragment>
      ))}
    </div>
  );
}
