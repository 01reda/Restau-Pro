import React from "react";
import "./products.css";

const ProductItem = ({ product, onAdd }) => {
  const isSoldOut = product.status === "soldout";

  return (
    <div className={`product-card ${isSoldOut ? "soldout" : ""}`}>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <button
          className="btn-reserve"
          onClick={() => onAdd(product)}
          disabled={isSoldOut}
        >
          {isSoldOut ? "Sold Out" : "Ajouter"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
