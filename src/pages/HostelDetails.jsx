import { useParams, Link } from "react-router-dom";
import hosteldetails from "./hostelDetails";
import Arrow from "../assets/arrw.svg";
import Verified from "../assets/verifiedimg.svg";
import Map from "../assets/map.svg";
import Footer from "../components/landingpage/Footer/Footer";

function HostelDetails() {
  const { id } = useParams();
  const hostel = hosteldetails.find((h) => h.id === parseInt(id));

  if (!hostel) {
    return <h2>Hostel Page loading...</h2>;
  }

  return (
    <div className="hostel-details-container">
      <div className="arrow">
        <Link to="/hostels" className="arrow">
          <img src={Arrow} className="arrowimg" alt="Back arrow" />
          <p>Back</p>
        </Link>
      </div>

      <div className="hostel-details">
        <img src={hostel.image} alt={hostel.name} className="details-image" />

        <div className="details-text">
          <h1>{hostel.name}</h1>

          <div className="verified-section">
            <img src={Verified} className="verified" alt="Verified icon" />
            <span>Verified</span>
          </div>

          <p className="description">{hostel.description}</p>

          <div className="detail-group">
            <p>
              <strong>Price:</strong> {hostel.price}
            </p>
            <p>
              <strong>Rooms:</strong> {hostel.rooms}
            </p>
            <p>
              <strong>Distance:</strong> {hostel.distance}
            </p>
            <p>
              <strong>Address:</strong> {hostel.address}
            </p>
          </div>

          <div className="amenities-list">
            <h3>Amenities:</h3>
            <ul>
              {hostel.amenities.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="map">
            <img src={Map} className="mapimg" alt="Map icon" />
            <p>{hostel.distance} from city center</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HostelDetails;
