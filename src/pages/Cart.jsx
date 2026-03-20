import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const updateQuantity = (id, amount) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeItem = (id, title) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.error(`${title} removed from cart`);
  };

  const handleCheckout = () => {
    toast.success("Thank you for your purchase! Your order has been placed.", {
      duration: 4000,
      icon: '🎉',
    });
    setCart([]);
    navigate('/');
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100 fade-in"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <div className="container mt-4 flex-grow-1">
        <h2 className="mb-4 fw-black text-uppercase" style={{ color: 'var(--text)' }}>
          Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-shopping-cart fa-4x text-muted mb-4 d-block"></i>
            <h4 className="fw-bold mb-2" style={{ color: 'var(--text)' }}>Your cart is empty</h4>
            <p style={{ color: 'var(--text-muted)' }} className="mb-4">
              Add some products to get started!
            </p>
            <Link to="/products" className="btn btn-danger btn-lg rounded-0 fw-bold text-uppercase px-5">
              Go Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {/* ── Cart Items ── */}
            <div className="col-12 col-lg-8">
              <div className="card border-0 shadow-sm p-3"
                style={{ backgroundColor: 'var(--card-bg)' }}>
                {/* Desktop Table - hidden on mobile */}
                <div className="d-none d-md-block">
                  <table className="table align-middle" style={{ color: 'var(--text)' }}>
                    <thead>
                      <tr>
                        <th style={{ color: 'var(--text)' }}>Product</th>
                        <th style={{ color: 'var(--text)' }}>Price</th>
                        <th style={{ color: 'var(--text)' }}>Quantity</th>
                        <th style={{ color: 'var(--text)' }}>Subtotal</th>
                        <th style={{ color: 'var(--text)' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(item => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src={item.image} alt={item.title}
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                className="me-3" />
                              <span className="text-truncate fw-bold"
                                style={{ maxWidth: '200px', color: 'var(--text)' }}>
                                {item.title}
                              </span>
                            </div>
                          </td>
                          <td style={{ color: 'var(--text)' }}>₱{item.price.toFixed(2)}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-sm btn-outline-secondary me-2"
                                onClick={() => updateQuantity(item.id, -1)}>-</button>
                              <span className="fw-bold" style={{ color: 'var(--text)' }}>
                                {item.quantity}
                              </span>
                              <button className="btn btn-sm btn-outline-secondary ms-2"
                                onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                          </td>
                          <td className="fw-bold text-danger">
                            ₱{(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td>
                            <button className="btn btn-sm btn-danger"
                              onClick={() => removeItem(item.id, item.title)}>
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards - shown only on mobile */}
                <div className="d-md-none">
                  {cart.map(item => (
                    <div key={item.id} className="border-bottom pb-3 mb-3"
                      style={{ borderColor: 'var(--card-border)' }}>
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <img src={item.image} alt={item.title}
                          style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                        <div className="flex-grow-1">
                          <p className="fw-bold mb-1 small" style={{ color: 'var(--text)' }}>
                            {item.title}
                          </p>
                          <p className="text-danger fw-bold mb-0">
                            ₱{item.price.toFixed(2)}
                          </p>
                        </div>
                        <button className="btn btn-sm btn-danger"
                          onClick={() => removeItem(item.id, item.title)}>
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <button className="btn btn-sm btn-outline-secondary me-2"
                            onClick={() => updateQuantity(item.id, -1)}>-</button>
                          <span className="fw-bold" style={{ color: 'var(--text)' }}>
                            {item.quantity}
                          </span>
                          <button className="btn btn-sm btn-outline-secondary ms-2"
                            onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <p className="fw-bold text-danger mb-0">
                          Subtotal: ₱{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Order Summary ── */}
            <div className="col-12 col-lg-4">
              <div className="card border-0 shadow-sm p-4"
                style={{ backgroundColor: 'var(--card-bg)', top: '100px', zIndex: 1 }}>
                <h4 className="fw-black text-uppercase mb-3" style={{ color: 'var(--text)' }}>
                  Order Summary
                </h4>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: 'var(--text-muted)' }}>Total Items:</span>
                  <span className="fw-bold" style={{ color: 'var(--text)' }}>
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>
                <hr style={{ borderColor: 'var(--card-border)' }} />
                <div className="d-flex justify-content-between mb-4">
                  <span className="h5 fw-black" style={{ color: 'var(--text)' }}>Total:</span>
                  <span className="h5 fw-black text-danger">₱{total.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn-success w-100 fw-bold py-3 rounded-0 shadow-sm"
                  onClick={handleCheckout}>
                  <i className="fas fa-check-circle me-2"></i>
                  Confirm Purchase
                </button>
                <Link to="/products"
                  className="btn btn-outline-danger w-100 fw-bold py-2 rounded-0 mt-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
