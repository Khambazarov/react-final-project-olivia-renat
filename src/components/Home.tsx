import "./Home.css";

export function Home() {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <p>Enjoy the best dishes in town!</p>
      <img
        className="home-img"
        src="https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=320&dpr=1"
        alt="Restaurant"
      />
      {/* https://goqr.me/de/ => Hinweis: Der QR Code kann komplett kostenlos verwendet werden (kommerzielle Nutzung und Druck erlaubt). */}
      <div className="qr-codes">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Ffinal-project-pizza.netlify.app%2F&amp;qzone=0&amp;margin=5&amp;size=100x100&amp;ecc=L"
          alt="qr code"
        />
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Ffinal-project-piwko-restaurant.netlify.app&amp;qzone=1&amp;margin=0&amp;size=100x100&amp;ecc=L"
          alt="qr code"
        />
      </div>
      <section>
        <h2>Our Specialties</h2>
        <ul className="menu">
          <li>Pizza Margherita</li>
          <li>Grilled Salmon</li>
          <li>Chocolate Cake</li>
        </ul>
      </section>
    </div>
  );
}
