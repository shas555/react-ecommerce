import Footer from '../components/Footer';
import mapImage from '../assets/images/map.png'; // Make sure the path matches your folder structure

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <div className="container my-5 flex-grow-1">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h1 className="fw-bold display-5 text-uppercase">Contact Us</h1>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted">
              Have questions about your order? Reach out to our Ecommerce team below. 
              We're here to help you.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Side: Get In Touch Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 rounded-4 h-100">
              <h4 className="fw-bold mb-4">GET IN TOUCH</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-bold">NAME</label>
                    <input type="text" className="form-control py-2 border-0 bg-light" placeholder="Enter your name*" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-bold">PHONE NUMBER</label>
                    <input type="text" className="form-control py-2 border-0 bg-light" placeholder="Enter your phone number*" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-bold">EMAIL</label>
                  <input type="email" className="form-control py-2 border-0 bg-light" placeholder="Enter your email*" />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold">YOUR MESSAGE</label>
                  <textarea className="form-control border-0 bg-light" rows="5" placeholder="How can we help?"></textarea>
                </div>
                <button className="btn btn-danger px-5 py-2 fw-bold rounded-pill shadow-sm">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Info & Hours */}
          <div className="col-lg-5">
            {/* Contact Information Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
              <h4 className="fw-bold mb-4 text-uppercase">Contact Information</h4>
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-phone-alt text-danger mt-1 me-3"></i>
                <div>
                  <h6 className="mb-0 fw-bold">PHONE</h6>
                  <p className="text-muted small">+63 917 888 0000</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-envelope text-danger mt-1 me-3"></i>
                <div>
                  <h6 className="mb-0 fw-bold">EMAIL</h6>
                  <p className="text-muted small">hello@ecommerce.ph</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-map-marker-alt text-danger mt-1 me-3"></i>
                <div>
                  <h6 className="mb-0 fw-bold">ECOMMERCE HQ</h6>
                  <p className="text-muted small">High Street South Corporate Plaza, BGC, Taguig City</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4">
              <h4 className="fw-bold mb-4 text-uppercase">Business Hours</h4>
              <div className="row text-center text-md-start">
                <div className="col-4">
                  <h6 className="fw-bold small">MON - FRI</h6>
                  <p className="text-muted x-small">9:00am - 8:00pm</p>
                </div>
                <div className="col-4 border-start border-end">
                  <h6 className="fw-bold small">SATURDAY</h6>
                  <p className="text-muted x-small">10:00am - 6:00pm</p>
                </div>
                <div className="col-4">
                  <h6 className="fw-bold small">SUNDAY</h6>
                  <p className="text-muted x-small">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Static Map Image Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm overflow-hidden rounded-4">
              <img 
                src={mapImage} 
                alt="Store Location Map" 
                className="img-fluid w-100"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;