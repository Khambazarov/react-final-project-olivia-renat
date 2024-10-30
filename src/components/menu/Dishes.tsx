import { NavLink, Outlet, useParams } from "react-router-dom";
import { menuEng } from "../../API/menuEng";
import { Fragment } from "react/jsx-runtime";

export function Dishes() {
  const { category, id } = useParams();

  if (!category) {
    return <div>Invalid path</div>;
  }

  return (
    <>
      {menuEng
        .find((item) => item.path === category)
        ?.dishes.map((item) => (
          <Fragment key={item.id}>
            <NavLink to={item.id} key={item.id}>
              <h2>
                {item.name}
                <span>{item.price}</span>
              </h2>
              <p>{item.description}</p>
              <img src={item.img} alt={item.name} />
              <p>{item.allergens}</p>
            </NavLink>
            {id === item.id && <Outlet />}
          </Fragment>
        ))}
    </>
  );
}
