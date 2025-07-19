import { useState } from "react";
import { Link } from "react-router-dom";
import roommateData from "./roommateData";
import Footer from "../components/landingpage/Footer/Footer";
import "../styles/_findRoommate.css";
import Arrow from "../assets/arrw.svg";

function FindRoommate() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="find-roommate-container">
      {/* Modal Section */}
      {showModal && (
        <div className="chat-modal-overlay" onClick={closeModal}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            {/* <div className="arrow">
              <Link to="/FindRoomate" className="arrow">
                <img src={Arrow} className="arrowimg" alt="Back arrow" />
                <p>Back</p>
              </Link>
            </div> */}
            <h2>Start a Chat</h2>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Submit</button>
            </form>
            <button onClick={closeModal} className="close-modal">×</button>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="arrow">
        <Link to="/" className="arrow">
          <img src={Arrow} className="arrowimg" alt="Back arrow" />
          <p>Back</p>
        </Link>
      </div>

      <h1>
        <span className="blue">
          Find your <span className="yellow">Perfect</span> Roommate
        </span>
      </h1>

      {/* Filter Bar */}
      <div className="filter-bar">
        <select name="gender">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="no-preference">No Preference</option>
        </select>

        <select name="religion">
          <option value="">Religion</option>
          <option value="christianity">Christianity</option>
          <option value="islam">Islam</option>
          <option value="others">Others</option>
        </select>

        <select name="school">
          <option value="">School</option>
          <option value="unilag">UNILAG</option>
          <option value="abu">ABU</option>
          <option value="uniport">UNIPORT</option>
          <option value="others">Others</option>
        </select>

        <select name="lifestyle">
          <option value="">Lifestyle</option>
          <option value="quiet">Quiet</option>
          <option value="social">Social</option>
          <option value="mixed">Mixed</option>
        </select>

        <button className="apply-button">Apply Filters</button>
      </div>

      {/* Roommate Cards */}
      <div className="roommate-list">
        {roommateData.map((roommate) => (
          <div key={roommate.id} className="roommate-card">
            <img src={roommate.image} alt={roommate.name} />
            <h3>{roommate.name}</h3>
            <p><strong>Gender:</strong> {roommate.gender}</p>
            <p><strong>Religion:</strong> {roommate.religion}</p>
            <p><strong>School:</strong> {roommate.school}</p>
            <p><strong>Lifestyle:</strong> {roommate.lifestyle}</p>
            <p>{roommate.bio}</p>
            <button onClick={openModal} className="chat-button">Chat Now</button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default FindRoommate;