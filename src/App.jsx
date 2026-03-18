import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  // ── Dark Mode ──
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // ── Cart ──
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.title} added to cart!`, {
      position: 'bottom-right',
      style: { border: '1px solid #dc3545', color: '#dc3545' },
    });
  };

  // ── Wishlist ──
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        toast('Removed from wishlist', { icon: '💔', position: 'bottom-right' });
        return prev.filter((item) => item.id !== product.id);
      }
      toast.success('Added to wishlist!', { icon: '❤️', position: 'bottom-right' });
      return [...prev, product];
    });
  };

  // ── Recently Viewed ──
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('recentlyViewed');
    return saved ? JSON.parse(saved) : [];
  });

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item.id !== product.id);
      const updated = [product, ...filtered].slice(0, 6);
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      return updated;
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <div className="d-flex flex-column min-vh-100" data-theme={darkMode ? 'dark' : 'light'}>

        {/* ── Header with Logo ── */}
        <Header />

        <main className="flex-grow-1" style={{ paddingBottom: '70px' }}>
          <Routes>
            <Route path="/" element={
              <Home
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
                recentlyViewed={recentlyViewed}
                darkMode={darkMode}
              />}
            />
            <Route path="/products" element={
              <ProductList
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
                addToRecentlyViewed={addToRecentlyViewed}
                darkMode={darkMode}
              />}
            />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} darkMode={darkMode} />} />
            <Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
        <Navbar
          cartCount={cartCount}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </Router>
  );
}

export default App;
