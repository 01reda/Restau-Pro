import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductItem from "./ProductItem";
import "./products.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleAdd = (product) => {
    alert(`Vous avez ajouté ${product.name} au panier !`);
    // ici tu peux gérer le panier si nécessaire
  };

  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onAdd={handleAdd} />
      ))}
    </div>
  );
};

export default ProductsList;
