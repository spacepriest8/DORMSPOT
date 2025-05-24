import { useParams } from "react-router-dom";
import hostels from "./data";

function HostelDetails() {
  const { id } = useParams();
  const hostel = hostels.find((h) => h.id === parseInt(id));

  if (!hostel) {
    return <h2>Hostel details loading ......</h2>;
  }

  return (
    <div className="hostel-details">
      <h1>{hostel.name}</h1>
      <p>Distance: {hostel.distance}</p>
      <p>Price: {hostel.price}</p>
      <p>Rooms: {hostel.rooms}</p>
    </div>
  );
}

export default HostelDetails;
