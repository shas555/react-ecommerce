import { Link } from 'react-router-dom';
import aboutHero from '../assets/images/about-hero.png';

const offerItems = [
  { icon: 'fa-baseball-ball', color: '#ff6b35', title: 'Toys & Play', desc: "Plush, rubber, and interactive toys that keep your dog mentally stimulated and physically active. Because a tired dog is a happy dog." },
  { icon: 'fa-adjust', color: '#dc3545', title: 'Harnesses', desc: "From tactical black nylon to soft herringbone step-ins — our harnesses are designed for comfort, control, and style on every walk." },
  { icon: 'fa-link', color: '#6f42c1', title: 'Leashes', desc: "Nylon, braided rope, and classic designs in multiple colors. Built strong enough for big dogs, lightweight enough for everyday use." },
  { icon: 'fa-bed', color: '#20c997', title: 'Beds & Rest', desc: "Knit boucle, corduroy loungers, and striped canvas beds that look good in your home and feel amazing for your pet." },
  { icon: 'fa-utensils', color: '#fd7e14', title: 'Feeding', desc: "Stylish terrazzo ceramic bowls with leather placemats. Because your pet deserves a dining experience as elevated as yours." },
  { icon: 'fa-cut', color: '#0dcaf0', title: 'Grooming', desc: "Electric nail grinders, professional scissors, and ultra-soft drying towels. Spa-quality grooming from the comfort of home." },
];

const valueItems = [
  { icon: 'fa-fingerprint', bg: 'bg-dark', title: 'Authenticity', desc: "No knockoffs, no shortcuts. Every product we carry is genuine and sourced from suppliers who love animals as much as we do." },
  { icon: 'fa-paw', bg: 'bg-danger', title: 'Pet-First Design', desc: "We test everything with real pets. If it is uncomfortable, unsafe, or just not fun — it does not make it to our shelves." },
  { icon: 'fa-users', bg: 'bg-dark', title: 'Community', desc: "PawShop is a family of pet owners. We listen, we share, and we grow together — one wagging tail at a time." },
  { icon: 'fa-star', bg: 'bg-danger', title: 'Customer Obsessed', desc: "Fast shipping, easy returns, and always-on support. We are not happy until you and your pet are." },
];

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100 fade-in" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── HERO HEADER ── */}
      <div className="py-5 px-4" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container">
          <span className="badge bg-danger px-3 py-2 mb-3 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>
            Our Story
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', lineHeight: 1.1, color: 'var(--text)' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '400' }}>About </span>
            <span className="text-uppercase">PawShop</span>
          </h1>
          <p className="mt-3 fs-5" style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
            Where every product is chosen with love — for the pets who give us everything.
          </p>
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <div
        className="position-relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '90px 0',
        }}
      >
        <div className="container">
          <div className="row align-items-start mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="text-white-50 small text-uppercase fw-bold mb-3">/ Since 2026</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', lineHeight: 1.2 }}>
                We started because our dogs deserved{' '}
                <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#ffc107' }}>
                  better than average.
                </span>
              </h2>
            </div>
            <div className="col-lg-1 d-none d-lg-block" />
            <div className="col-lg-5">
              <div className="d-flex justify-content-end mb-3">
                <span className="badge border border-white text-white px-3 py-2 small text-uppercase">
                  Our Mission →
                </span>
              </div>
              <div className="row g-4 mt-2">
                <div className="col-6">
                  <p className="text-white-50 small lh-lg">
                    PawShop was founded by pet owners who were tired of choosing between style
                    and function. We believe your pet's gear should be as thoughtful as any other
                    part of your life.
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-white-50 small lh-lg">
                    From our soft plush toys to our heavy-duty harnesses, every item is carefully
                    sourced, tested by real pets, and chosen because it genuinely makes their lives
                    and yours a little better.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="rounded-4 p-4 p-md-5 mt-4"
            style={{ background: 'linear-gradient(135deg, #dc3545 0%, #ff6b35 50%, #ffc107 100%)' }}>
            <div className="row text-white text-center g-3">
              <div className="col-4">
                <h2 className="fw-black mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900' }}>5k+</h2>
                <p className="small text-uppercase mb-0 opacity-75 fw-bold">Happy Pet Owners</p>
              </div>
              <div className="col-4">
                <h2 className="fw-black mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900' }}>15+</h2>
                <p className="small text-uppercase mb-0 opacity-75 fw-bold">Curated Products</p>
              </div>
              <div className="col-4">
                <h2 className="fw-black mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900' }}>98%</h2>
                <p className="small text-uppercase mb-0 opacity-75 fw-bold">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT WE OFFER ── */}
      <div style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-5">
        <div className="container py-4">
          <p className="small text-uppercase fw-bold mb-2" style={{ color: 'var(--text-muted)' }}>/ what we carry</p>
          <h2 className="fw-black text-uppercase mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)' }}>
            Built for Every Kind of Pet Life
          </h2>
          <div className="row g-4">
            {offerItems.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 d-flex flex-column justify-content-between"
                  style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div>
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: '52px', height: '52px', backgroundColor: item.color + '20' }}>
                      <i className={`fas ${item.icon}`} style={{ color: item.color, fontSize: '1.2rem' }}></i>
                    </div>
                    <h5 className="fw-black text-uppercase mb-2" style={{ color: 'var(--text)' }}>{item.title}</h5>
                    <p className="small lh-lg mb-0" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                  <div className="text-end mt-3">
                    <Link to="/products" className="small fw-bold text-decoration-none" style={{ color: item.color }}>
                      Shop {item.title} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div style={{ backgroundColor: 'var(--bg)' }} className="py-5">
        <div className="container py-4">
          <p className="small text-uppercase fw-bold mb-2" style={{ color: 'var(--text-muted)' }}>/ values</p>
          <h2 className="fw-black text-uppercase mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)' }}>
            Guiding Lights of PawShop
          </h2>
          <div className="row g-4">
            {valueItems.map((val) => (
              <div className="col-md-6" key={val.title}>
                <div className="border rounded-4 p-4 h-100 d-flex flex-column justify-content-between"
                  style={{ minHeight: '200px', borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
                  <div>
                    <h5 className="fw-black text-uppercase mb-2" style={{ color: 'var(--text)' }}>{val.title}</h5>
                    <p className="small lh-lg mb-0" style={{ color: 'var(--text-muted)' }}>{val.desc}</p>
                  </div>
                  <div className="text-end mt-3">
                    <div className={`rounded-circle d-inline-flex align-items-center justify-content-center ${val.bg}`}
                      style={{ width: '48px', height: '48px' }}>
                      <i className={`fas ${val.icon} text-white`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default About;
