import React from 'react';
import './Newsletter.css';
import { FaArrowRight } from 'react-icons/fa';

// Brend logotiplari (rasm bo'lsa img, bo'lmasa matn)
const brands = [
  { id: 1, name: "Google" },
  { id: 2, name: "amazon" },
  { id: 3, name: "PHILIPS" },
  { id: 4, name: "TOSHIBA" },
  { id: 5, name: "SAMSUNG" }
];

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Subscribe to our newsletter</h2>
        <p className="newsletter-text">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. 
          Donec non quam urna. Quisque vitae porta ipsum.
        </p>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email address" 
            className="newsletter-input" 
            required
          />
          <button type="submit" className="newsletter-btn">
            SUBSCRIBE <FaArrowRight className="arrow-icon" />
          </button>
        </form>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;