import { useEffect, useState } from "react";
import "../styles/heroLayout.css";

const images = [
  "/products/images/restau.jpg",
  "/products/images/restauu.jpg",
  "/products/images/reeestau.jpg",
  "/products/images/rrestau.jpg"
];

function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

<div className="hero-content">
  <div className="hero-box no-border">
    <h1>Bienvenue chez RestauPro</h1>
    <p>Une expérience culinaire authentique</p>

    <a
      href="/about"
      style={{
        display: "inline-block",
        marginTop: "16px",
        color: "#FFD54F",
        fontWeight: "bold",
        textDecoration: "none",
        fontSize: "18px"
      }}
    >
      Découvrir notre histoire →
    </a>
  </div>
</div>

    </div>
  );
}

export default HomePage;
