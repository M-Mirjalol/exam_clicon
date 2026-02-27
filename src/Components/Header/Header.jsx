import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaTruck,
  FaExchangeAlt,
  FaHeadset,
  FaQuestionCircle,
} from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { wishlist = [], cart = [] } = useContext(CartContext);

  return (
    <header className="header">
      <div className="container">

        {/* Top Banner */}
        <div className="top-banner">
          <span className="badge">Black</span>
          <span>Friday</span>
          <span className="sale">Up to 59% OFF</span>
          <button>SHOP NOW →</button>
        </div>

        {/* Top Navigation */}
        <div className="top-nav">
          <p>Welcome to Clicon online eCommerce store.</p>
          <div className="top-right">
            <select>
              <option>Eng</option>
              <option>Rus</option>
              <option>Uzb</option>
            </select>
            <select>
              <option>USD</option>
              <option>RUB</option>
              <option>UZS</option>
            </select>
          </div>
        </div>

        <hr />

        {/* Main Header */}
        <div className="main-header">
          <h2 className="logo">CLICON</h2>

          <div className="search-box">
            <input type="text" placeholder="Search for anything..." />
            <FaSearch />
          </div>

          <div className="icons">

            {/* Wishlist */}
            <Link to="/favourite" className="icon">
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="count">{wishlist.length}</span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="icon">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="count">{cart.length}</span>
              )}
            </Link>

            {/* User */}
            <FaUser className="icon" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <select>
          <option>All Category</option>
          <option>Phones</option>
          <option>Laptops</option>
          <option>Accessories</option>
        </select>

        <div className="links">
          <span><FaTruck /> Track Order</span>
          <span><FaExchangeAlt /> Compare</span>
          <span><FaHeadset /> Customer Support</span>
          <span><FaQuestionCircle /> Need Help</span>
        </div>

        <div className="phone">
          <FaPhoneAlt />
          <span>+1-202-555-0104</span>
        </div>
      </div>
    </header>
  );
};

export default Header;