import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import OrderConfirmation from "./pages/OrderConfirmation";
import ComparisonModal from "./components/ComparisonModal";

// Helper component to reset scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("name");

  return (
    <Router>
      <ScrollToTop />


      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm} />

      <main 
        className="app-main-content" 
        style={{ 
          minHeight: "80vh", 
          display: "block", 
          width: "100%", 
          overflowX: "hidden",
          paddingBottom: "100px" 
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />

          <Route
            path='/products'
            element={
              <ProductList
                searchTerm={searchTerm}
                category={category}
                setCategory={setCategory}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />
            }
          />

          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>

      {/* Global Utilities */}
      <ComparisonModal />
      <Footer />
    </Router>
  );
}

export default App;