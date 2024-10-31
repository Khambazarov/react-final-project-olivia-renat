export function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <p>Sie können uns unter folgender Nummer erreichen: 01234 567890</p>
      <section>
        <h2>Kontaktformular</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Nachricht:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Absenden</button>
        </form>
      </section>
    </div>
  );
}
