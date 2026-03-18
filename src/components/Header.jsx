import { Link } from 'react-router-dom';
import dogLogo from '../assets/images/dog_logo.png';

const Header = () => {
  return (
    <header className="py-3 border-bottom shadow-sm"
      style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.3s ease' }}>
      <div className="container d-flex align-items-center justify-content-center">
        <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">

          {/* Logo with transparent background */}
          <img
            src={dogLogo}
            alt="PawShop Logo"
            style={{
              height: '40px',
              width: 'auto',
              mixBlendMode: 'multiply',   // blends black logo with background
              opacity: 0.85,
            }}
          />

          {/* Brand name */}
          <span className="fw-black text-uppercase fs-4"
            style={{ letterSpacing: '2px', color: 'var(--text)' }}>
            Paw<span className="text-danger">Shop</span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
