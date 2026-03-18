import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Section 1: Brand/About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-uppercase">PawShop</h5>
            <p className="text-secondary small">
              Premium pet supplies curated with love. From toys to grooming essentials — everything your pet deserves, all in one place.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-uppercase">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none small">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="text-secondary text-decoration-none small">Shop</Link></li>
              <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none small">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-secondary text-decoration-none small">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact Details */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-uppercase">Contact Us</h5>
            <p className="text-secondary small mb-2"><i className="fas fa-map-marker-alt me-2"></i> BGC, Taguig City, Metro Manila</p>
            <p className="text-secondary small mb-2"><i className="fas fa-envelope me-2"></i> hello@pawshop.ph</p>
            <p className="text-secondary small"><i className="fas fa-phone me-2"></i> +63 917 888 0000</p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary small mb-0">
              &copy; {new Date().getFullYear()} PawShop. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <i className="fab fa-facebook me-3 text-secondary fs-5"></i>
            <i className="fab fa-instagram me-3 text-secondary fs-5"></i>
            <i className="fab fa-tiktok text-secondary fs-5"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
