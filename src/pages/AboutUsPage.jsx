import { useEffect, useState } from "react";
import "../styles/heroLayout.css";

const images = [
  "/products/images/restau.jpg",
  "/products/images/restauu.jpg",
  "/products/images/reeestau.jpg",
  "/products/images/rrestau.jpg"
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0); // déjà fait

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3500); // temps entre images
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="about-hero">
      {images.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="about-overlay" />

      {/* Conteneur centré pour le texte */}
      <div className="about-container">
      <div className="about-box">
  <p>
    Notre histoire commence par une passion simple mais profonde : cuisiner avec le cœur.
    Chaque jour, notre équipe s’engage à transformer des ingrédients soigneusement sélectionnés
    en plats qui racontent une histoire, celle de l’amour du goût, du partage et de l’authenticité.
  </p>

  <p>
    Inspirés par les traditions culinaires et enrichis par une touche de modernité,
    nous croyons que chaque repas est une expérience unique. Chez nous, la cuisine n’est pas
    seulement un métier, c’est un langage universel qui rassemble les gens autour de la table.
  </p>

  <p>
    Notre <a href="/products" className="about-link">MENU</a> est le reflet de notre engagement :
    des recettes préparées avec soin, des saveurs équilibrées et une présentation élégante,
    pensée pour éveiller tous vos sens.
  </p>

  <p>
    Que vous souhaitiez partager un moment chaleureux sur place, organiser une
    <a href="/tables" className="about-link"> RÉSERVATION </a>
    pour une occasion spéciale ou profiter de nos plats grâce à la
    <a href="/tables" className="about-link"> LIVRAISON</a>,
    nous sommes là pour vous accompagner à chaque instant.
  </p>

  <p>
    Merci de faire partie de notre histoire.
    Chaque visite, chaque commande et chaque sourire nous motivent à continuer
    à cuisiner avec passion, jour après jour.
  </p>
</div>

      </div>
    </div>
  );
}
