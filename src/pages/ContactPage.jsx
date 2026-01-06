import { useState } from "react";
import "./contact.css"; // Réutilisation du même CSS que LoginPage

const ContactPage = () => {
  const [rating, setRating] = useState(0);

  return (
    <main className="main-container">
      {/* SVG FILTER */}
      <svg className="svg-container">
        <defs>
          <filter
            id="turbulent-displace"
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.015"
              numOctaves="3"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="card-container">
        <div className="inner-container">
          <div className="border-outer">
            <div className="main-card"></div>
          </div>

          <div className="glow-layer-1"></div>
          <div className="glow-layer-2"></div>
        </div>

        <div className="background-glow"></div>

        <div className="content-container">
          <form className="login-form">
            <h2>Contact</h2>

            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />

            <textarea
              className="contact-textarea"
              rows="4"
              placeholder="Votre commentaire..."
            />

            {/* STARS */}
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={rating >= star ? "active" : ""}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
