import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { menuEng } from "../../API/menuEng";
import { Fragment } from "react/jsx-runtime";

export const DishDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate()

  if (!category || !id) {
    return <div>Invalid path</div>;
  }

  const dish = menuEng
    .find((item) => item.path === category)
    ?.dishes.find((item) => item.id === id);

  return (
    <>
      {dish && (
        <Fragment key={id}>
          <NavLink to="../">
          <span>{dish?.price}</span>
            <p>{dish?.description}</p>
            {/* <img src={dish?.img} alt={dish.name} /> */}
            <p>{dish?.allergens.join(", ")}</p>
            <h2>close</h2>
            {id === dish?.id && <Outlet />}
          </NavLink>
            <button>ADD</button>
        </Fragment>
      )}
    </>
  );
};
