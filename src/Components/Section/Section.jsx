import React, { useContext } from "react";
import "./Section.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

import rasm1 from "./images/rasm1.png";
import rasm2 from "./images/rasm2.png";
import rasm3 from "./images/rasm3.png";
import rasm4 from "./images/rasm4.png";
import rasm5 from "./images/rasm5.png";

const products = [
  { id: 1, title: "Xbox Series S", price: 442, oldPrice: 865, image: rasm1 },
  { id: 2, title: "Wireless Earbuds", price: 230, image: rasm2 },
  { id: 3, title: "Mobile 4G LTE", price: 220, image: rasm3 },
  { id: 4, title: "4K Smart TV", price: 865, image: rasm4 },
  { id: 5, title: "Sony Camera", price: 1200, image: rasm5 }
];

const Section = () => {
  const { wishlist = [], addToWishlist, addToCart } = useContext(CartContext);

  return (
    <section className="section">
      <div className="container grid">
        {products.map((product) => {
          const isWishlisted = wishlist?.find((item) => Number(item.id) === Number(product.id));

          return (
            <div className="card" key={product.id}>
              {/* Rasm va Overlay qismi */}
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-img" />
                
                <div className="overlay">
                  <div className="actions">
                    <button 
                      className={`action-btn ${isWishlisted ? "active" : ""}`}
                      onClick={() => addToWishlist(product)}
                    >
                      <FaHeart />
                    </button>
                    <button className="action-btn" onClick={() => addToCart(product)}>
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ma'lumotlar qismi */}
              <div className="product-info">
                <div className="rating">⭐⭐⭐⭐⭐</div>
                <h3>{product.title}</h3>
                <p className="price">
                   <span className="current-price">${product.price}</span>
                   {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Section;