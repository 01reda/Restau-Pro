import React from "react";

const ReviewPage = () => {
  const reviews = [
    {
      name: "Alice M.",
      rating: 5,
      text: "Excellent restaurant ! La nourriture est délicieuse et le service impeccable. Je recommande vivement."
    },
    {
      name: "Mohamed R.",
      rating: 4,
      text: "Ambiance agréable et plats savoureux. Un peu d’attente mais l’expérience reste très positive."
    },
    {
      name: "Sara L.",
      rating: 5,
      text: "Une expérience culinaire incroyable ! Personnel chaleureux et très professionnel."
    },
    {
      name: "Yassine B.",
      rating: 4,
      text: "Très bon rapport qualité-prix. Les plats sont bien présentés et pleins de saveurs."
    },
    {
      name: "Nadia K.",
      rating: 5,
      text: "Un vrai coup de cœur. On sent que chaque plat est préparé avec passion."
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "160px 20px 60px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FFD54F",
            marginBottom: "50px",
            fontSize: "36px"
          }}
        >
          Avis de nos Clients
        </h1>

        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(8px)",
              borderRadius: "14px",
              padding: "24px 28px",
              marginBottom: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px"
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "16px"
                }}
              >
                {review.name}
              </span>

              <span style={{ color: "#FFD54F" }}>
                {"★".repeat(review.rating)}
              </span>
            </div>

            <p
              style={{
                color: "#f1f1f1",
                fontSize: "15px",
                lineHeight: "1.7",
                margin: 0
              }}
            >
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
