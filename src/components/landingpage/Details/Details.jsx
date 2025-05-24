import { useNavigate } from "react-router-dom";
import One from "../../../assets/one.svg";
import Two from "../../../assets/two.svg";
import Three from "../../../assets/three.svg";
function Details() {
  const navigate = useNavigate();

  const handleHostelClick = () => {
    navigate("/Hostels");
  };
  return (
    <div className="detailscontainer">
      <h1>How it works</h1>
      <div className="detailsnumber">
        <div className="text1">
          <img src={One} className="imgnumber" />
          <h2>Search your area</h2>
          <p>
            Find the perfect location <br />
            near your campus
          </p>
        </div>

        <div className="text1">
          <img src={Two} className="imgnumber" />
          <h2>Book Inspection</h2>
          <p>
            Schedule a visit or book <br /> instantly
          </p>
        </div>
        <div className="text1">
          <img src={Three} className="imgnumber" />
          <h2>Move In</h2>
          <p>
            Easy move in process with <br />
            support
          </p>
        </div>
      </div>
      <button className="herobutton detailsbutton" onClick={handleHostelClick}>
        START BROWSING HOSTEL
      </button>
    </div>
  );
}
export default Details;
