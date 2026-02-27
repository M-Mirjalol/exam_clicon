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

function App() {
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

export default App