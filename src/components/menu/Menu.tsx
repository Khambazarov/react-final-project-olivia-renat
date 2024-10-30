import { Fragment } from "react/jsx-runtime";
import { NavLink, Outlet, useParams } from "react-router-dom";
import {
  menuEng,
  // MenuDe
} from "../../API/menuEng";

export function Menu() {
  const { category } = useParams();

  return (
    <>
      {menuEng.map(({ title, path, img, description }) => (
        <Fragment key={path}>
          <NavLink to={path}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={img} alt={title} />
          </NavLink>
          {category === path && <Outlet />}
        </Fragment>
      ))}
    </>
  );
}
