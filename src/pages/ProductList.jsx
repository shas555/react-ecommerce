import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

// ── Skeleton Card ──
const SkeletonCard = () => (
  <div className="card h-100 border-0 rounded-3 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
    <div className="skeleton" style={{ height: '220px', borderRadius: '0.375rem 0.375rem 0 0' }}></div>
    <div className="card-body p-3">
      <div className="skeleton mb-2" style={{ height: '16px', width: '80%' }}></div>
      <div className="skeleton mb-2" style={{ height: '14px', width: '50%' }}></div>
      <div className="skeleton mb-3" style={{ height: '14px', width: '40%' }}></div>
      <div className="skeleton" style={{ height: '38px', width: '100%' }}></div>
    </div>
  </div>
);

const ProductList = ({ addToCart, toggleWishlist, wishlist, addToRecentlyViewed }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchFromUrl = queryParams.get('search') || '';
  const categoryFromUrl = queryParams.get('category') || 'all';

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState('default');
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(2000);
  const [searchQuery, setSearchQuery] = useState(searchFromUrl);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Sync URL params when navigation changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category') || 'all';
    const search = params.get('search') || '';
    setCategory(cat);
    setSearchQuery(search);
  }, [location.search]);

  useEffect(() => {
    let result = [...products];

    if (category !== 'all') result = result.filter((p) => p.category === category);
    if (searchQuery) result = result.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    result = result.filter((p) => p.price <= priceRange);

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'name-asc') result.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === 'name-desc') result.sort((a, b) => b.title.localeCompare(a.title));
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    setFilteredProducts(result);
  }, [category, searchQuery, sortBy, priceRange]);

  return (
    <div className="d-flex flex-column min-vh-100 fade-in"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <div className="container mt-4 flex-grow-1">

        {/* ── Header ── */}
        <div className="mb-4">
          <h2 className="fw-black text-uppercase mb-1" style={{ color: 'var(--text)' }}>Our Products</h2>
          <p style={{ color: 'var(--text-muted)' }} className="small">
            {filteredProducts.length} items found
            {category !== 'all' && <span className="badge bg-danger ms-2">{category}</span>}
          </p>
        </div>

        {/* ── Filters Row ── */}
        <div className="row g-3 mb-4 align-items-end">
          {/* Search */}
          <div className="col-md-3">
            <label className="small fw-bold text-uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Search</label>
            <div className="input-group">
              <span className="input-group-text border-end-0"
                style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}>
                <i className="fas fa-search text-muted"></i>
              </span>
              <input type="text" className="form-control border-start-0"
                style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text)', borderColor: 'var(--card-border)' }}
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category */}
          <div className="col-md-3">
            <label className="small fw-bold text-uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Category</label>
            <select className="form-select"
              style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text)', borderColor: 'var(--card-border)' }}
              value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="Toys">Toys</option>
              <option value="Harnesses">Harnesses</option>
              <option value="Leashes">Leashes</option>
              <option value="Beds">Beds</option>
              <option value="Feeding">Feeding</option>
              <option value="Grooming">Grooming</option>
            </select>
          </div>

          {/* Sort */}
          <div className="col-md-3">
            <label className="small fw-bold text-uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Sort By</label>
            <select className="form-select"
              style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text)', borderColor: 'var(--card-border)' }}
              value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="col-md-3">
            <label className="small fw-bold text-uppercase mb-1" style={{ color: 'var(--text-muted)' }}>
              Max Price: ₱{priceRange}
            </label>
            <input type="range" className="form-range" min="100" max="2000" step="50"
              value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
          </div>
        </div>

        {/* ── Products Grid ── */}
        <div className="row g-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={i}><SkeletonCard /></div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                  onView={() => addToRecentlyViewed(product)}
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3 d-block"></i>
              <p className="fs-5" style={{ color: 'var(--text-muted)' }}>No products found</p>
              <button className="btn btn-danger rounded-0 mt-2"
                onClick={() => { setSearchQuery(''); setCategory('all'); setSortBy('default'); setPriceRange(2000); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
