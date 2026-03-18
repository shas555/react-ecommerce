import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast
import Footer from '../components/Footer';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const updateQuantity = (id, amount) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeItem = (id, title) => {
    setCart(prev => prev.filter(item => item.id !== id));
    // Added a toast for removing items
    toast.error(`${title} removed from cart`);
  };

  const handleCheckout = () => {
    // REPLACED ALERT WITH TOAST
    toast.success("Thank you for your purchase! Your order has been placed.", {
      duration: 4000,
      icon: '🎉',
    });
    
    setCart([]); 
    navigate('/'); 
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <h2 className="mb-4 fw-bold">Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h2 className="mb-4 text-muted">Your cart is empty</h2>
            <Link to="/products" className="btn btn-primary">Go Shopping</Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm p-3 mb-4">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="me-3" />
                            {/* Use item.title to match FakeStoreAPI */}
                            <span className="text-truncate" style={{ maxWidth: '200px' }}>{item.title}</span>
                          </div>
                        </td>
                        <td>₱{item.price.toFixed(2)}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                            <span className="fw-bold">{item.quantity}</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                          </div>
                        </td>
                        <td className="fw-bold">₱{(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id, item.title)}>
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm p-4 sticky-top" style={{ top: '100px', zIndex: '1' }}>
                <h4 className="fw-bold mb-3">Order Summary</h4>
                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items:</span>
                  <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span className="h5">Total:</span>
                  <span className="h5 fw-bold text-danger">₱{total.toFixed(2)}</span>
                </div>
                <button 
                  className="btn btn-success w-100 fw-bold py-2 shadow-sm" 
                  onClick={handleCheckout}
                >
                  Confirm Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;