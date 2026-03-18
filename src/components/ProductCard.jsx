const ProductCard = ({ product, addToCart, toggleWishlist, wishlist = [], onView }) => {
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? 'text-warning' : 'text-secondary'}`}
        style={{ fontSize: '0.75rem' }}></i>
    ));
  };

  const handleView = () => {
    if (onView) onView(product);
  };

  return (
    <div className="card h-100 border-0 rounded-3 shadow-sm product-card"
      style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text)', transition: 'background 0.3s' }}
      onClick={handleView}>

      {/* Image */}
      <div className="position-relative overflow-hidden rounded-top-3"
        style={{ height: '220px', backgroundColor: 'var(--card-bg)' }}>
        <img
          src={product.image}
          className="w-100 h-100"
          alt={product.title}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.4s ease',
          }}
        />

        {/* Wishlist Button */}
        {toggleWishlist && (
          <button
            className="position-absolute top-0 end-0 m-2 btn btn-sm rounded-circle shadow-sm"
            style={{
              width: '34px', height: '34px', padding: 0,
              backgroundColor: isWishlisted ? '#dc3545' : 'white',
              border: '1px solid #dee2e6',
              zIndex: 2
            }}
            onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
          >
            <i className="fas fa-heart"
              style={{ color: isWishlisted ? 'white' : '#dc3545', fontSize: '0.8rem' }}></i>
          </button>
        )}
      </div>

      {/* Details */}
      <div className="card-body d-flex flex-column p-3">
        <h6 className="card-title fw-bold text-truncate mb-1" title={product.title}
          style={{ color: 'var(--text)' }}>
          {product.title}
        </h6>

        <div className="mb-2 d-flex align-items-center gap-1">
          {renderStars(product.rating)}
          <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }} className="ms-1">
            ({product.rating}.0)
          </span>
        </div>

        <p className="small text-truncate mb-2" style={{ color: 'var(--text-muted)' }}>
          {product.category}
        </p>

        <div className="mt-auto">
          <p className="fw-bold fs-5 text-danger mb-3">
            ₱{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
          <button
            className="btn btn-danger w-100 rounded-0 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          >
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
