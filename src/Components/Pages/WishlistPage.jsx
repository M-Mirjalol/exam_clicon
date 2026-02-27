import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { wishlist, addToWishlist, addToCart } = useContext(CartContext);

  return (
    <div className="wishlist-page">
      <div className="container">
        <h2 className="title">Wishlist</h2>

        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-table">
            <div className="table-header">
              <span>PRODUCTS</span>
              <span>PRICE</span>
              <span>STOCK STATUS</span>
              <span>ACTIONS</span>
            </div>

            {wishlist.map((item) => (
              <div className="table-row" key={item.id}>
                <div className="product">
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </div>

                <span>${item.price}</span>

                <span className="stock">IN STOCK</span>

                <div className="actions">
                  <button 
                    className="cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    ADD TO CART
                  </button>

                  <FaTrashAlt
                    className="delete"
                    onClick={() => addToWishlist(item)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;