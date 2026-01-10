import { useState } from "react";
import {useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TablesMap from "../components/tables/TablesMap";
import "../components/tables/tables.css";

// Produits Livraison
const productsList = [
  { id: 1, city: "casa", name: "Burger Classic", price: 50, image: "/products/images/burger-classic.jpg" },
  { id: 2, city: "casa", name: "Pizza Margherita", price: 90, image: "/products/images/pizza-margherita.jpg" },
  { id: 3, city: "rabat", name: "Salade Fraîche", price: 40, image: "/products/images/greek_salad.jpg" },
  { id: 4, city: "rabat", name: "Menu Duo Burger", price: 110, image: "/products/images/burger-classic.jpg" },
];

export default function TablesPage() {
  const [section, setSection] = useState(""); // "" | "reservation" | "livraison"
  const [markerPosition, setMarkerPosition] = useState([33.5731, -7.5898]); // Casablanca
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const closePopup = () => setShowPopup(false);
  const filteredProducts = productsList.filter(p => p.city === selectedCity);

  const [bgIndex, setBgIndex] = useState(0); // index de l'image
  const backgrounds = [
    "/products/images/bg1.jpg",
    "/products/images/bg2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000); // change toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reservation-page">

      {/* ================= ÉCRAN D’ACCUEIL ================= */}
      {!section && (
  <div
    className="home-selection"
    style={{
      position: "fixed",      // pour couvrir tout l’écran
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${backgrounds[bgIndex]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transition: "background-image 1s ease-in-out",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,            // au-dessus de tout
    }}
  >
    <h1 style={{ color: "#fff", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>Bienvenue !</h1>
    <p style={{ color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>Que souhaitez-vous faire ?</p>

    <div className="home-buttons">
      <button onClick={() => setSection("reservation")} className="home-btn">Réservation</button>
      <button onClick={() => setSection("livraison")} className="home-btn">Livraison</button>
    </div>
  </div>
)}


      {/* ================= SECTION RESERVATION ================= */}
      {section === "reservation" && (
        <section className="section-tables glass-card">
          <h2>Plan des tables</h2>
          <TablesMap />
          <button className="validate-btn" onClick={() => setShowPopup(true)}>
            Valider la réservation
          </button>
        </section>
      )}

      {/* ================= SECTION LIVRAISON ================= */}
      {section === "livraison" && (
        <section className="delivery-section">
          <h2 className="delivery-title">🚚 Livraison Disponible</h2>

          {/* Sélection de la ville */}
          <div className="delivery-select-container">
            <label className="delivery-label">Choisissez votre ville</label>
            <select
              className="delivery-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">-- Sélectionner --</option>
              <option value="casa">Casablanca</option>
              <option value="rabat">Rabat</option>
            </select>
          </div>

          {!selectedCity && (
            <p className="delivery-info">
              La livraison est disponible uniquement à Casablanca et Rabat.
            </p>
          )}

          {/* Produits */}
          {selectedCity && (
            <div className="products-container">
              <div className="products-grid">
                {filteredProducts.map((p) => (
                  <div className="product-card" key={p.id}>
                    <img src={p.image} className="product-image" alt={p.name} />
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-price">{p.price} DH</p>
                    <button className="reserve-btn" onClick={() => setShowPopup(true)}>Commander</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Carte Leaflet */}
          <h2 style={{marginTop: "30px"}}>Localisation pour livraison</h2>
          <MapContainer
            center={markerPosition}
            zoom={12}
            scrollWheelZoom={false}
            className="leaflet-container"
            onClick={(e) => setMarkerPosition([e.latlng.lat, e.latlng.lng])}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition}>
              <Popup>Lieu sélectionné pour livraison</Popup>
            </Marker>
          </MapContainer>
        </section>
      )}

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-emoji">✅</div>
            <h2>Commande confirmée !</h2>
            <p>Merci, votre action a été prise en compte.</p>
            <button className="close-btn" onClick={() => { closePopup(); setSection(""); }}>
              Fermer
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
