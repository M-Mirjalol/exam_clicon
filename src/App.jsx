import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Section from './Components/Section/Section'
import WishlistPage from './Components/Pages/WishlistPage'
import { CartProvider } from "./context/CartContext";
import CartPage from "./Components/Pages/CartPage/CartPage";
import About from './Components/About/About';
import Newsletter from "./Components/News/Newsletter";
import Footer from "./Components/Footer/Footer";
import './App.css'

// --- PREMIUM NEON LOADING ---
const Loading = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.loaderBox}>
        <div className="neon-spinner"></div>
        <h2 style={styles.text}>Yuklanmoqda...</h2>
      </div>
      <style>
        {`
          .neon-spinner {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top: 4px solid #00d2ff;
            border-right: 4px solid #9d00ff;
            animation: spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(157, 0, 255, 0.3);
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#0f172a', // To'q ko'k/qora premium fon
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
  },
  loaderBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    margin: 0,
    animation: 'pulse 1.5s ease-in-out infinite'
  }
};

// --- ASOSIY APP ---
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effektni ko'rish uchun 2.5 soniya
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Section />
                <About />
                <Newsletter/>
                <Footer/>
              </>
            } 
          />
          <Route path="/favourite" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;