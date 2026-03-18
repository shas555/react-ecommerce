import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = ({ wishlist, toggleWishlist, addToCart, darkMode }) => {
  return (
    <div className="d-flex flex-column min-vh-100 fade-in"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <div className="container mt-4 flex-grow-1">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-black text-uppercase mb-1" style={{ color: 'var(--text)' }}>
              My Wishlist
            </h2>
            <p style={{ color: 'var(--text-muted)' }} className="small">
              {wishlist.length} saved {wishlist.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          {wishlist.length > 0 && (
            <Link to="/products" className="btn btn-outline-danger rounded-0 fw-bold text-uppercase px-4">
              Continue Shopping
            </Link>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-heart fa-4x text-muted mb-4 d-block"></i>
            <h4 className="fw-bold mb-2" style={{ color: 'var(--text)' }}>Your wishlist is empty</h4>
            <p style={{ color: 'var(--text-muted)' }} className="mb-4">
              Save items you love by tapping the heart icon on any product.
            </p>
            <Link to="/products" className="btn btn-danger btn-lg rounded-0 fw-bold text-uppercase px-5">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {wishlist.map((product) => (
              <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
