import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  count: number;
};

export function Checkout() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [state, handleSubmit] = useForm("xdoqqkll");

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setCartProducts(storedProducts);
  }, []);

  function totalProductPrice(price: string, count: number) {
    const replaceUnderscoreToDot = price.replace("_", ".");
    return Number(replaceUnderscoreToDot) * count;
  }

  function totalPrice() {
    return cartProducts.reduce((acc, product) => {
      return acc + totalProductPrice(product.price, product.count);
    }, 0);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Fügen Sie die Bestelldaten als verstecktes Feld hinzu
    const form = e.target as HTMLFormElement;
    const orderDetails = cartProducts
      .map(
        (product) =>
          `${product.name} (x${product.count}): ${totalProductPrice(
            product.price,
            product.count
          ).toFixed(2)}€`
      )
      .join(", ");
    const orderDetailsInput = document.createElement("input");
    orderDetailsInput.type = "hidden";
    orderDetailsInput.name = "orderDetails";
    orderDetailsInput.value = orderDetails;
    form.appendChild(orderDetailsInput);

    // Fügen Sie den Gesamtpreis als verstecktes Feld hinzu
    const totalPriceInput = document.createElement("input");
    totalPriceInput.type = "hidden";
    totalPriceInput.name = "totalPrice";
    totalPriceInput.value = totalPrice().toFixed(2) + "€";
    form.appendChild(totalPriceInput);

    handleSubmit(e);

    localStorage.setItem("products", "[]");
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setCartProducts(storedProducts);
  };

  if (state.succeeded) {
    return <p>Thanks for your order!</p>;
  }

  return (
    <>
      <h2>Warenkorb</h2>
      <div>
        {cartProducts.length > 0 ? (
          <>
            {cartProducts.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <div>Product Price: {product.price.replace("_", ",")}€</div>
                <div>Amount: {product.count}</div>
                <div>
                  Price:
                  {totalProductPrice(product.price, product.count).toFixed(2)}€
                </div>
              </div>
            ))}
            <div>Total Price: {totalPrice().toFixed(2)}€</div>
          </>
        ) : (
          <div>Cart is empty</div>
        )}
      </div>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" name="address" required />
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" required />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </>
  );
}
