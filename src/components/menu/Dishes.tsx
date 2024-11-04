import { NavLink, Outlet, useParams } from "react-router-dom";
import { menuEng } from "../../API/menuEng";
import { Fragment } from "react/jsx-runtime";

import "./Dishes.css";

export function Dishes() {
  const { category, dishPath } = useParams();

  if (!category) {
    return <div>Invalid path</div>;
  }

  return (
    <div className="dishes-container">
      {menuEng
        .find((item) => item.path === category)
        ?.dishes.map((item) => (
          <Fragment key={item.id}>
            <div className="dish-item">
              <NavLink to={item.dishPath} key={item.id}>
                <h2>{item.name}</h2>
                <img className="dishes-img" src={item.img} alt={item.name} />
              </NavLink>
              {dishPath === item.dishPath && <Outlet />}
            </div>
          </Fragment>
        ))}
    </div>
  );
}
