import { NavLink } from 'react-router-dom';

const Navbar = ({ cartCount, darkMode, setDarkMode }) => {
  const activeStyle = {
    color: '#dc3545',
    textShadow: '0 0 8px rgba(220, 53, 69, 0.4)',
    transition: 'all 0.3s ease-in-out'
  };

  const navLinkClass = "nav-link text-center px-0 transition-all";

  return (
    <>
      {/* ── Dark Mode Toggle — Fixed Top Right ── */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="btn rounded-circle shadow position-fixed d-flex align-items-center justify-content-center"
        style={{
          top: '16px',
          right: '16px',
          width: '42px',
          height: '42px',
          zIndex: 9999,
          backgroundColor: darkMode ? '#ffc107' : '#212529',
          border: 'none',
          transition: 'all 0.3s ease',
        }}
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}
          style={{ color: darkMode ? '#212529' : '#ffffff', fontSize: '1rem' }}></i>
      </button>

      {/* ── Bottom Navigation Bar ── */}
      <nav className="navbar fixed-bottom border-top shadow-lg py-2"
        style={{ backgroundColor: 'var(--navbar-bg)', transition: 'background-color 0.3s ease' }}>
        <div className="container-fluid justify-content-around">

          <NavLink className={navLinkClass} to="/"
            style={({ isActive }) => isActive ? activeStyle : { transition: '0.3s', color: 'var(--text)' }}>
            <i className="fas fa-home fs-4 d-block"></i>
            <span className="small fw-bold">Home</span>
          </NavLink>

          <NavLink className={navLinkClass} to="/products"
            style={({ isActive }) => isActive ? activeStyle : { transition: '0.3s', color: 'var(--text)' }}>
            <i className="fas fa-th-large fs-4 d-block"></i>
            <span className="small fw-bold">Shop</span>
          </NavLink>

          <NavLink className={navLinkClass} to="/cart"
            style={({ isActive }) => isActive ? activeStyle : { transition: '0.3s', color: 'var(--text)' }}>
            <div className="position-relative d-inline-block">
              <i className="fas fa-shopping-cart fs-4 d-block"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.6rem' }}>{cartCount}</span>
              )}
            </div>
            <span className="small d-block fw-bold">Cart</span>
          </NavLink>

          <NavLink className={navLinkClass} to="/about"
            style={({ isActive }) => isActive ? activeStyle : { transition: '0.3s', color: 'var(--text)' }}>
            <i className="fas fa-info-circle fs-4 d-block"></i>
            <span className="small fw-bold">About</span>
          </NavLink>

          <NavLink className={navLinkClass} to="/contact"
            style={({ isActive }) => isActive ? activeStyle : { transition: '0.3s', color: 'var(--text)' }}>
            <i className="fas fa-envelope fs-4 d-block"></i>
            <span className="small fw-bold">Contact</span>
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
