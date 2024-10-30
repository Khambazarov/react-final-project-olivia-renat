// import { NavLink, Outlet, useParams } from "react-router-dom";
// import { menuEng } from "../../API/menuEng";
// import { Fragment } from "react/jsx-runtime";
// import { useState } from "react";

// export const DishDetails = () => {
//   const { category, id } = useParams();
//   const [count, setCount] = useState(1);
//   const [products, setProducts] = useState<{ id: string }[]>([]);

//   if (!category || !id) {
//     return <div>Invalid path</div>;
//   }

//   const dish = menuEng
//     .find((item) => item.path === category)
//     ?.dishes.find((item) => item.id === id);

//   function handleAddProduct() {
//     setCount((prev) => prev + 1);
//     const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
//     const isProduct = storedProducts.find(
//       (product: { id: string }) => product.id === id
//     );
//     if (!isProduct) {
//       storedProducts.push({ id, count });
//       localStorage.setItem("products", JSON.stringify(storedProducts));
//       setProducts(storedProducts);
//     }
//     // setCount((prev) => prev + 1);
//   }

//   return (
//     <>
//       {dish && (
//         <Fragment key={id}>
//           <NavLink to="../">
//             <span>{dish?.price}</span>
//             <p>{dish?.description}</p>
//             <p>{dish?.allergens.join(", ")}</p>
//             <h2>close</h2>
//             {id === dish?.id && <Outlet />}
//           </NavLink>
//           <button onClick={handleAddProduct}>ADD: {count}</button>
//         </Fragment>
//       )}
//     </>
//   );
// };

import { NavLink, Outlet, useParams } from "react-router-dom";
import { menuEng } from "../../API/menuEng";
import { Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";

const initialState: {
  id: string;
  name: string;
  price: string;
  count: number;
}[] = [];

export const DishDetails = () => {
  const { category, dishPath } = useParams();
  const [products, setProducts] = useState(initialState);

  // Initialize products from localStorage when the component mounts
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

    // Update product count or add new product to storedProducts
    if (productIndex > -1) {
      storedProducts[productIndex].count += 1;
    } else {
      const newProduct = {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        count: 1,
      };
      storedProducts.push(newProduct);
    }

    // Update both state and localStorage
    setProducts(storedProducts);
    localStorage.setItem("products", JSON.stringify(storedProducts));
    console.log(storedProducts);
  }

  return (
    <>
      {dish && (
        <Fragment key={dishPath}>
          <NavLink to="../">
            <span>{dish?.price}</span>
            <p>{dish?.description}</p>
            <p>{dish?.allergens.join(", ")}</p>
            <h2>close</h2>
            {dishPath === dish?.dishPath && <Outlet />}
          </NavLink>
          <button onClick={handleAddProduct}>
            ADD: {existingProductCount}
          </button>
        </Fragment>
      )}
    </>
  );
};

// import { NavLink, Outlet, useParams } from "react-router-dom";
// import { menuEng } from "../../API/menuEng";
// import { Fragment } from "react/jsx-runtime";
// import { useState, useEffect } from "react";

// export const DishDetails = () => {
//   const { category, dishPath } = useParams();
//   const [products, setProducts] = useState<
//     { id: string; name: string; price: number; count: number }[]
//   >([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
//     setProducts(storedProducts);
//   }, []);

//   if (!category || !dishPath) {
//     return <div>Invalid path</div>;
//   }

//   const dish = menuEng
//     .find((item) => item.path === category)
//     ?.dishes.find((item) => item.dishPath === dishPath);

//   const existingProductCount = products.find((product) => product.id === dish?.id)?.count || 0;

//   function handleAddProduct() {
//     if (!dish) return;

//     const storedProducts = [...products];
//     const productIndex = storedProducts.findIndex((product) => product.id === dish.id);

//     if (productIndex > -1) {
//       storedProducts[productIndex].count += 1;
//     } else {
//       storedProducts.push({
//         id: dish.id,
//         name: dish.name,
//         price: dish.price,
//         count: 1,
//       });
//     }

//     setProducts(storedProducts);
//     localStorage.setItem("products", JSON.stringify(storedProducts));
//   }

//   return (
//     <>
//       {dish && (
//         <Fragment key={dishPath}>
//           <NavLink to="../">
//             <span>{dish.price}</span>
//             <p>{dish.description}</p>
//             <p>{dish.allergens.join(", ")}</p>
//             <h2>close</h2>
//             {dishPath === dish.dishPath && <Outlet />}
//           </NavLink>
//           <button onClick={handleAddProduct}>ADD: {existingProductCount}</button>
//         </Fragment>
//       )}
//     </>
//   );
// };
