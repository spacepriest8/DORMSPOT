import { useState } from "react";
import { Link } from "react-router-dom";
function ListProperty() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <div className="propertycontainer">
      <Link to="/" className="back-link">
        <p> ← Back</p>
      </Link>

      <header>
        <h2>
          List a <span className="propertytext">New </span>Property
        </h2>
      </header>

      {showMessage && (
        <div className="success-message">
          Thank you, you have successfully submitted your listing!
        </div>
      )}

      <form id="propertyForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Proname">Property Name</label>
          <input
            type="text"
            id="Proname"
            placeholder="Enter property name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Property Type</label>
          <input
            type="text"
            id="type"
            placeholder="Enter property type"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cation">Location</label>
          <input
            type="text"
            id="cation"
            placeholder="Enter property address"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price (#)</label>
            <input type="text" id="price" placeholder="Enter amount" required />
          </div>
          <div className="form-group">
            <label htmlFor="month">Payment Duration</label>
            <input type="text" id="month" placeholder="e.g. Monthly" required />
          </div>
        </div>

        <div className="form-group">
          <label>Amenities</label>
          <div className="checkboxes">
            <div>
              <label>
                <input type="checkbox" /> Wi-Fi
              </label>
              <label>
                <input type="checkbox" /> Water
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Power Supply
              </label>
              <label>
                <input type="checkbox" /> Furnished
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Kitchen
              </label>
              <label>
                <input type="checkbox" /> Ensuite
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Photos</label>
          <input type="file" id="file" multiple />
        </div>

        <div className="form-group contactinput">
          <label>Contact Information</label>
          <input type="text" placeholder="Phone Number" required />
          <input
            type="text"
            placeholder="Whatsapp Number (Optional)"
            required
          />
          <input type="text" placeholder="Email" required />
        </div>

        <div className="form-actions">
          <button type="submit">Submit Listing</button>
          <button type="reset" className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ListProperty;
