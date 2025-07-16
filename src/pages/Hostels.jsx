import { Link } from "react-router-dom";
import Arrow from "../assets/arrw.svg";
import Filter from "../assets/filter.svg";
import Hostel1 from "../assets/hostel1.svg";
import Verified from "../assets/verifiedimg.svg";
import Map from "../assets/map.svg";
import hostels from "./data";
import Footer from "../components/landingpage/Footer/Footer";

function Hostels() {
  return (
    <div>
      <div className="maincontainer">
        <div className="leftcontainer">
          <div className="arrow">
            <Link to="/" className="arrow">
              <img src={Arrow} className="arrowimg" />
              <p>Back</p>
            </Link>
          </div>
          <h4 className="filter">Filters</h4>
          <div>
            <p className="budget">Budget</p>
            <img src={Filter} className="filterline" />
            <p className="zero">
              #0 <span className="number">#200k</span>
            </p>
          </div>
          <p className="city">
            Distance from the city
            <br />
            center
          </p>
          <select className="distance-select">
            <option>0-2km</option>
            <option>2-4km</option>
            <option>4-6km</option>
          </select>

          <div className="gender">
            <h5>Gender</h5>
            <label htmlFor="male">
              <input type="checkbox" id="male" />
              <span>Male Only</span>
            </label>
            <label htmlFor="female">
              <input type="checkbox" id="female" />
              <span>Female Only</span>
            </label>
            <label htmlFor="mixed">
              <input type="checkbox" id="mixed" />
              <span>Mixed</span>
            </label>
          </div>
          <div className="amenities">
            <h5>Amenities</h5>
            <label htmlFor="wifi">
              <input type="checkbox" id="wifi" />
              <span>Wi-Fi</span>
            </label>
            <label htmlFor="conditioner">
              <input type="checkbox" id="conditioner" />
              <span>Airi Conditioner</span>
            </label>
            <label htmlFor="laundry">
              <input type="checkbox" id="laundry" />
              <span>Laundry</span>
            </label>
            <label htmlFor="kitchen">
              <input type="checkbox" id="kitchen" />
              <span>Kitchen</span>
            </label>
          </div>
        </div>

        {/* This is the right container */}
        <div className="rightcontainer">
          <div className="hostelcontainer">
            {hostels.map((hostel, index) => (
              <div className="hostels" key={index}>
                <img src={Hostel1} className="hostel1" alt="Hostel" />
                <div className="verification">
                  <h4>{hostel.name}</h4>
                  <div className="verifiedimg">
                    <img
                      src={Verified}
                      className="verified"
                      alt="Verified icon"
                    />
                    <h4>Verified</h4>
                  </div>
                </div>
                <div className="map">
                  <img src={Map} className="mapimg" alt="Map icon" />
                  <p>{hostel.distance}</p>
                </div>
                <div className="roomprice">
                  <p>{hostel.price}</p>
                  <h3>{hostel.rooms}</h3>
                </div>
                <Link to={`/hostel/${hostel.id}`} className="details-link">
                  <button className="herobutton hostelbtn">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Hostels;
