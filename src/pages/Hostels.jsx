import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrw.svg";
import Filter from "../assets/filter.svg";
import Hostel1 from "../assets/hostel1.svg";
import Verified from "../assets/verifiedimg.svg";
import Map from "../assets/map.svg";
import CloseIcon from "../assets/close.svg";
import hostelsData from "./data";
import Footer from "../components/landingpage/Footer/Footer";
import "../styles/_Hostels.css";

function Hostels() {
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (hostel) => {
    setSelectedHostel(hostel);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="hostels-page">
      <div className="main-container">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <div className="back-link">
            <Link to="/" className="back-button">
              <img src={Arrow} className="arrow-icon" alt="Back" />
              <span>Back</span>
            </Link>
          </div>
          
          <h4 className="filters-title">Filters</h4>
          
          <div className="filter-section">
            <h5 className="filter-label">Budget</h5>
            <img src={Filter} className="filter-line" alt="Budget filter" />
            <p className="budget-range">
              ₦0 <span className="max-budget">₦200k</span>
            </p>
          </div>
          
          <div className="filter-section">
            <h5 className="filter-label">Distance from city center</h5>
            <select className="distance-select">
              <option value="0-2">0-2km</option>
              <option value="2-4">2-4km</option>
              <option value="4-6">4-6km</option>
            </select>
          </div>

          <div className="filter-section">
            <h5 className="filter-label">Gender</h5>
            <div className="checkbox-group">
              <label className="checkbox-option">
                <input type="checkbox" name="gender" value="male" />
                <span>Male Only</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="gender" value="female" />
                <span>Female Only</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="gender" value="mixed" />
                <span>Mixed</span>
              </label>
            </div>
          </div>
          
          <div className="filter-section">
            <h5 className="filter-label">Amenities</h5>
            <div className="checkbox-group">
              <label className="checkbox-option">
                <input type="checkbox" name="amenities" value="wifi" />
                <span>Wi-Fi</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="amenities" value="air-conditioner" />
                <span>Air Conditioner</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="amenities" value="laundry" />
                <span>Laundry</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" name="amenities" value="kitchen" />
                <span>Kitchen</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Hostels Listing */}
        <main className="hostels-listing">
          <div className="hostels-grid three-columns">
            {hostelsData.map((hostel) => (
              <article className="hostel-card" key={hostel.id}>
                <img 
                  src={hostel.image || Hostel1} 
                  className="hostel-image" 
                  alt={hostel.name}
                  onClick={() => openModal(hostel)}
                />
                
                <div className="hostel-header">
                  <h4>{hostel.name}</h4>
                  {hostel.verified && (
                    <div className="verified-badge">
                      <img src={Verified} alt="Verified" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <div className="hostel-location">
                  <img src={Map} alt="Location" />
                  <span>{hostel.distance} from city center</span>
                </div>
                
                <div className="hostel-pricing">
                  <span className="price">{hostel.price}</span>
                  <span className="rooms">{hostel.rooms} rooms</span>
                </div>
                
                <button 
                  className="view-details-btn"
                  onClick={() => openModal(hostel)}
                >
                  View Details
                </button>
              </article>
            ))}
          </div>
        </main>
      </div>

      {/* Hostel Details Modal */}
      {isModalOpen && selectedHostel && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="hostel-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <img src={CloseIcon} alt="Close" />
            </button>
            
            <div className="modal-content">
              <div className="modal-images">
                <img 
                  src={selectedHostel.image || Hostel1} 
                  alt={selectedHostel.name} 
                  className="main-image"
                />
                <div className="thumbnail-gallery">
                  <img src={selectedHostel.image || Hostel1} alt="Thumbnail 1" />
                  <img src={Hostel1} alt="Thumbnail 2" />
                  <img src={Hostel1} alt="Thumbnail 3" />
                </div>
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2>{selectedHostel.name}</h2>
                  {selectedHostel.verified && (
                    <div className="verified-badge">
                      <img src={Verified} alt="Verified" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <div className="location">
                  <img src={Map} alt="Location" />
                  <span>{selectedHostel.distance} from city center</span>
                </div>
                
                <div className="pricing">
                  <span className="price">{selectedHostel.price}</span>
                  <span className="availability">{selectedHostel.rooms} rooms available</span>
                </div>
                
                <div className="description">
                  <h3>Description</h3>
                  <p>{selectedHostel.description || "Comfortable accommodation with all necessary amenities for students."}</p>
                </div>
                
                <div className="amenities">
                  <h3>Amenities</h3>
                  <div className="amenities-grid">
                    <span>Wi-Fi</span>
                    <span>Air Conditioning</span>
                    <span>Laundry</span>
                    <span>Kitchen</span>
                    <span>24/7 Security</span>
                    <span>Study Area</span>
                  </div>
                </div>
                
               <Link to="/login">
  <button className="book-btn">Book Now</button>
</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Hostels;
