import "./Cart.css"

import { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";

type Product = {
  id: string;
  name: string;
  price: string;
  count: number;
};

type State = {
  cartProduct: Product[];
};

type Action = {
  type: "increment" | "decrement" | "delete";
  id: string;
};

function reducer(state: State, action: Action) {
  if (action.type === "delete") {
    const deleteProduct = state.cartProduct.filter(
      (product) => product.id !== action.id
    );
    localStorage.setItem("products", JSON.stringify(deleteProduct));
    return { cartProduct: deleteProduct };
  }
  const updatedProduct = state.cartProduct.map((product) => {
    if (product.id === action.id) {
      if (action.type === "increment") {
        return { ...product, count: product.count + 1 };
      } else if (action.type === "decrement") {
        return { ...product, count: product.count > 1 ? product.count - 1 : 1 };
      }
    }
    return product;
  });

  localStorage.setItem("products", JSON.stringify(updatedProduct));
  return { cartProduct: updatedProduct };
}

export function Cart() {
  const cartProduct = JSON.parse(localStorage.getItem("products") || "[]");
  const [state, dispatch] = useReducer(reducer, { cartProduct });

  function totalProductPrice(price: string, count: number) {
    const replaceUnderscoreToDot = price.replace("_", "");
    return (Number(replaceUnderscoreToDot) * count) / 100;
  }

  function totalPrice() {
    return state.cartProduct.reduce((acc, product) => {
      return acc + totalProductPrice(product.price, product.count);
    }, 0);
  }

  return (
    <>
      {state.cartProduct.length > 0 ? (
        <>
          {state.cartProduct.map((product) => (
            <div className="container" key={product.id}>
              <h3>{product.name}</h3>
              <div>Product Price: {product.price.replace("_", ",")}€</div>
              <div>
                <button
                className="count-btn"
                  onClick={() =>
                    dispatch({ type: "decrement", id: product.id })
                  }
                >
                  -
                </button>
                {product.count}
                <button
                className="count-btn"
                  onClick={() =>
                    dispatch({ type: "increment", id: product.id })
                  }
                >
                  +
                </button>
              </div>
              <button
              className="delete"
                onClick={() => dispatch({ type: "delete", id: product.id })}
              >
                Delete
              </button>
              <div>
                Price:
                {totalProductPrice(product.price, product.count).toFixed(2)}€
              </div>
            </div>
          ))}
          <div>Total Price: {totalPrice().toFixed(2)}€</div>
          <NavLink to="../checkout">
            <Button text="Checkout" />
          </NavLink>
        </>
      ) : (
        <div>Cart is empty</div>
      )}
    </>
  );
}
