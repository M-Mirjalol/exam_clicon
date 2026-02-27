import React from 'react';
import './Footer.css';
import { FaApple, FaGooglePlay, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          
          {/* 1. Brend va Aloqa */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-dot"></div>
              <span>CLICON</span>
            </div>
            <div className="contact-info">
              <span className="label">Customer Supports:</span>
              <h3 className="phone">(629) 555-0129</h3>
              <p className="address">4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p className="email">info@kinbo.com</p>
            </div>
          </div>

          {/* 2. Top Category */}
          <div className="footer-section">
            <h4 className="section-title">TOP CATEGORY</h4>
            <ul className="footer-links">
              <li>Computer & Laptop</li>
              <li>Smartphone</li>
              <li>Headphone</li>
              <li className="highlight">Accessories</li>
              <li>Camera & Photo</li>
              <li>TV & Homes</li>
              <li className="browse-link">Browse All Product <FaArrowRight /></li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li>Shop Product</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* 4. Download & Tags */}
          <div className="footer-section">
            <h4 className="section-title">DOWNLOAD APP</h4>
            <div className="app-download-wrap">
              <div className="app-card">
                <FaGooglePlay className="app-icon" />
                <div className="app-text">
                  <span>Get it now</span>
                  <strong>Google Play</strong>
                </div>
              </div>
              <div className="app-card">
                <FaApple className="app-icon" />
                <div className="app-text">
                  <span>Get it now</span>
                  <strong>App Store</strong>
                </div>
              </div>
            </div>

            <h4 className="section-title tags-title">POPULAR TAG</h4>
            <div className="tags-grid">
              {["Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker"].map(tag => (
                <button key={tag} className="tag-btn">{tag}</button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  );
};

export default Footer;