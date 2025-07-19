import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListProperty() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      e.target.reset();
    }, 1500);
  };

  const handleDashboardRedirect = () => {
    setShowModal(false);
    navigate("/Dashboard");
  };

  return (
    <div className="propertycontainer">
      <Link to="/" className="back-link">
        <p>← Back</p>
      </Link>

      <header>
        <h2>
          List a <span className="propertytext">New </span>Property
        </h2>
      </header>

      <form id="propertyForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Proname">Property Name</label>
          <input
            type="text"
            id="Proname"
            name="Proname"
            placeholder="Enter property name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Property Type</label>
          <select id="type" name="type" required>
            <option value="">Select type</option>
            <option value="Apartment">Apartment</option>
            <option value="Hostel">Hostel</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter property address"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price (#)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="month">Payment Duration</label>
            <select id="month" name="month" required>
              <option value="">Select duration</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Amenities</label>
          <div className="checkboxes">
            <div>
              <label>
                <input type="checkbox" name="amenities" value="Wi-Fi" /> Wi-Fi
              </label>
              <label>
                <input type="checkbox" name="amenities" value="Water" /> Water
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="amenities" value="Power Supply" /> Power Supply
              </label>
              <label>
                <input type="checkbox" name="amenities" value="Furnished" /> Furnished
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="amenities" value="Kitchen" /> Kitchen
              </label>
              <label>
                <input type="checkbox" name="amenities" value="Ensuite" /> Ensuite
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="photos">Upload Photos</label>
          <input
            type="file"
            id="photos"
            name="photos"
            multiple
            accept="image/*"
          />
        </div>

        <div className="form-group contactinput">
          <label>Contact Information</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="Whatsapp Number (Optional)"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Listing"}
          </button>
          <button type="reset" className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">✓</div>
            <h3 className="modal-title">Listing Successful!</h3>
            <p className="modal-message">
              Your property has been listed successfully.
            </p>
            <button
              onClick={handleDashboardRedirect}
              className="modal-button"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListProperty;