import { Button } from "./Button";
import "./Contact.css";

import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xdoqqkll");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div>
     <h3>Contact</h3>
<section>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form">
            <label htmlFor="message">Nachricht:</label>
            <textarea id="message" name="message" rows={10}></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button />
        </form>
      </section>
    </div>
  );
}
