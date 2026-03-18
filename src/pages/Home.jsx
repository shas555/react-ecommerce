import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import bannerImage from '../assets/images/banner.jpg';
import products from '../data/products';
import Navbar from '../components/Navbar';

const Home = ({ addToCart, toggleWishlist, wishlist, recentlyViewed }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const featured = products.slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  const categories = [
    { name: 'Toys', icon: 'fa-baseball-ball', color: '#ff6b35', desc: 'Keep them entertained' },
    { name: 'Harnesses', icon: 'fa-adjust', color: '#dc3545', desc: 'Safe & comfortable walks' },
    { name: 'Leashes', icon: 'fa-link', color: '#6f42c1', desc: 'Control & style combined' },
    { name: 'Beds', icon: 'fa-bed', color: '#20c997', desc: 'Rest they deserve' },
    { name: 'Feeding', icon: 'fa-utensils', color: '#fd7e14', desc: 'Elegant dining for pets' },
    { name: 'Grooming', icon: 'fa-cut', color: '#0dcaf0', desc: 'Look & feel their best' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 fade-in"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── HERO BANNER ── */}
      <div className="position-relative text-white d-flex align-items-center justify-content-center"
        style={{
          height: '85vh',
          backgroundColor: '#1a1a2e',
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        {/* Dark overlay */}
        <div className="position-absolute w-100 h-100"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)', top: 0, left: 0 }} />
        <div className="container text-center position-relative">
          <span className="badge bg-danger px-3 py-2 mb-3 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>
            Premium Pet Supplies
          </span>
          <h1 className="fw-black mb-4 text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.1, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Everything Your<br />
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#ffc107' }}>
              Pet Deserves
            </span>
          </h1>
          <p className="text-white-50 mb-5 fs-5">
            Premium toys, harnesses, leashes, beds & grooming essentials — all in one place.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/products"
              className="btn btn-danger btn-lg px-5 py-3 fw-bold text-uppercase rounded-0 shadow">
              Shop Now
            </Link>
            <Link to="/about"
              className="btn btn-outline-light btn-lg px-5 py-3 fw-bold text-uppercase rounded-0">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* ── SEARCH BAR ── */}
      <div style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <form onSubmit={handleSearch}>
                <div className="input-group shadow-sm" style={{ borderRadius: "50px", overflow: "hidden" }}>
                  <input type="text"
                    className="form-control py-3 border-0 rounded-start-pill"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", color: "var(--text)", fontSize: "1rem", border: "none" }}
                    placeholder="  Search for toys, harnesses, beds..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="btn btn-danger px-4 fw-bold text-uppercase rounded-end-pill" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY QUICK LINKS ── */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-black text-uppercase" style={{ color: 'var(--text)' }}>Shop by Category</h2>
          <p style={{ color: 'var(--text-muted)' }}>Find exactly what your pet needs</p>
        </div>
        <div className="row g-3">
          {categories.map((cat) => (
            <div className="col-6 col-md-4 col-lg-2" key={cat.name}>
              <Link to={`/products?category=${cat.name}`}
                className="text-decoration-none">
                <div className="card border-0 shadow-sm text-center p-3 h-100"
                  style={{ backgroundColor: 'var(--card-bg)', transition: 'transform 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                    style={{ width: '52px', height: '52px', backgroundColor: cat.color + '20' }}>
                    <i className={`fas ${cat.icon}`} style={{ color: cat.color, fontSize: '1.3rem' }}></i>
                  </div>
                  <h6 className="fw-bold mb-1 small text-uppercase" style={{ color: 'var(--text)' }}>{cat.name}</h6>
                  <p className="mb-0" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{cat.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED PRODUCTS ── */}
      <div style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-black text-uppercase mb-1" style={{ color: 'var(--text)' }}>
                🐶 Top Picks
              </h2>
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>
                Most-loved by pets and their humans
              </p>
            </div>
            <Link to="/products" className="btn btn-outline-danger rounded-0 fw-bold text-uppercase px-4">
              View All
            </Link>
          </div>
          <div className="row g-4">
            {featured.map((product) => (
              <div className="col-6 col-md-3" key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <div className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-6 col-md-3">
            <div className="p-3">
              <i className="fas fa-shield-alt fa-2x text-danger mb-3 d-block"></i>
              <h6 className="fw-bold text-uppercase" style={{ color: 'var(--text)' }}>Premium Quality</h6>
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Only the best materials for your pet</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3">
              <i className="fas fa-truck fa-2x text-danger mb-3 d-block"></i>
              <h6 className="fw-bold text-uppercase" style={{ color: 'var(--text)' }}>Fast Delivery</h6>
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Metro Manila: 1–2 business days</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3">
              <i className="fas fa-heart fa-2x text-danger mb-3 d-block"></i>
              <h6 className="fw-bold text-uppercase" style={{ color: 'var(--text)' }}>Made with Love</h6>
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Curated by pet owners, for pet owners</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3">
              <i className="fas fa-undo fa-2x text-danger mb-3 d-block"></i>
              <h6 className="fw-bold text-uppercase" style={{ color: 'var(--text)' }}>Easy Returns</h6>
              <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Hassle-free 7-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── WISHLIST SECTION ── */}
      {wishlist.length > 0 && (
        <div style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="fw-bold text-uppercase mb-1" style={{ color: 'var(--text)' }}>
                  <i className="fas fa-heart text-danger me-2"></i>My Wishlist
                </h2>
                <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>
                  {wishlist.length} saved {wishlist.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <Link to="/wishlist" className="btn btn-outline-danger rounded-0 fw-bold text-uppercase px-4">
                View All
              </Link>
            </div>
            <div className="row g-4">
              {wishlist.slice(0, 4).map((product) => (
                <div className="col-6 col-md-3" key={product.id}>
                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    wishlist={wishlist}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── RECENTLY VIEWED ── */}
      {recentlyViewed.length > 0 && (
        <div className="container py-5">
          <div className="mb-4">
            <h2 className="fw-bold text-uppercase mb-1" style={{ color: 'var(--text)' }}>
               Recently Viewed
            </h2>
            <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Pick up where you left off</p>
          </div>
          <div className="row g-4">
            {recentlyViewed.map((product) => (
              <div className="col-6 col-md-3" key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              </div>
            ))}
          </div>
        </div>
      )}


    </div>
  );
};

export default Home;
