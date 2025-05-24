import { useNavigate } from "react-router-dom";
import RoomateLady from "../../../assets/roomatelady.svg";
function FindRoomate() {
  const navigate = useNavigate();

  const handleRoomateClick = () => {
    navigate("/FindRoomate");
  };
  return (
    <div className="roomatecontainer">
      <div className="roomatetext">
        <h1>
          Tired of looking for the <br /> perfect roomate
        </h1>
        <p>
          We'll connect you with great <br /> matches
        </p>
        <button className="herobutton" onClick={handleRoomateClick}>
          FIND A ROOMATE
        </button>
      </div>
      <div className="headerimg"></div>
      <img src={RoomateLady} className="roomateimage" />
    </div>
  );
}
export default FindRoomate;
