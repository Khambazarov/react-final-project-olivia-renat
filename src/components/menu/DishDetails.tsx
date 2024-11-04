import { NavLink, Outlet, useParams } from "react-router-dom";
import { menuEng } from "../../API/menuEng";
import { Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";

import "./DishDetails.css";

const initialState: {
  id: string;
  name: string;
  price: string;
  count: number;
}[] = [];

export const DishDetails = () => {
  const { category, dishPath } = useParams();
  const [products, setProducts] = useState(initialState);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  }, []);

  if (!category || !dishPath) {
    return <div>Invalid path</div>;
  }

  const dish = menuEng
    .find((item) => item.path === category)
    ?.dishes.find((item) => item.dishPath === dishPath);

  const existingProductCount =
    products.find((product) => product.id === dish?.id)?.count || 0;

  function handleAddProduct() {
    if (!dish) return;

    const storedProducts = [...products];
    const productIndex = storedProducts.findIndex(
      (product) => product.id === dish.id
    );

    if (productIndex > -1) {
      storedProducts[productIndex].count = 1;
    } else {
      const newProduct = {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        count: 1,
      };
      storedProducts.push(newProduct);
    }

    setProducts(storedProducts);
    localStorage.setItem("products", JSON.stringify(storedProducts));
  }

  return (
    <>
      {dish && (
        <Fragment key={dishPath}>
          <NavLink to="../">
            <p>{dish.price.replace("_", ",")}€</p>
            <p>{dish?.description}</p>
            <p>Allergens: {dish?.allergens.join(", ")}</p>
            {dishPath === dish?.dishPath && <Outlet />}
          </NavLink>
          {existingProductCount === 1 ? (
            <button disabled className="dishes-details-btn">
              Added
            </button>
          ) : (
            <button className="dishes-details-btn" onClick={handleAddProduct}>
              Add to Cart
            </button>
          )}
        </Fragment>
      )}
    </>
  );
};
