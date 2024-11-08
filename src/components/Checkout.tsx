import "./Checkout.css";

import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";
import { Button } from "./Button";

type Product = {
  id: string;
  name: string;
  price: string;
  count: number;
};

export function Checkout() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    localStorage.setItem("products", "[]");
    setCartProducts([]);
  };

  if (state.succeeded) {
    return <p>Thanks for your order!</p>;
  }
  // Fügen Sie die Bestelldaten als verstecktes Feld hinzu
  const orderDetails = cartProducts
    .map(
      (product) =>
        `${product.name} (x${product.count}): ${totalProductPrice(
          product.price,
          product.count
        ).toFixed(2)}€`
    )
    .join(", ");

  return (
    <>
      <h2>Warenkorb</h2>
      <div className="container">
        {cartProducts.length > 0 ? (
          <>
            {cartProducts.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <div>Product Price: {product.price.replace("_", ",")}€</div>
                <div>Amount: {product.count}</div>
                <div className="product-price">
                  Price:{" "}
                  {totalProductPrice(product.price, product.count)
                    .toFixed(2)
                    .replace(".", ",")}
                  €
                </div>
              </div>
            ))}
            <div className="total-price">
              Total Price: {totalPrice().toFixed(2).replace(".{", ",")}€
            </div>
          </>
        ) : (
          <div>Cart is empty</div>
        )}
      </div>

      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input type="hidden" name="_replyto" value={formData.email} />
        <input type="hidden" name="orderDetails" value={orderDetails} />
        <input
          type="hidden"
          name="totalPrice"
          value={totalPrice().toFixed(2) + "€"}
        />
        <Button text="Order" />
      </form>
    </>
  );
}
