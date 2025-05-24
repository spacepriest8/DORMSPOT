import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/dormspotLogo.svg";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/">
        <img src={Logo} className="logo" alt="Logo" />
      </Link>
      <div className="navlist">
        <Link to="/">
          <span className="homespan">HOME</span>
        </Link>
        <Link to="/Hostels">HOSTEL</Link>
        <Link to="/ListProperty">LIST PROPERTY</Link>
        <Link to="/FindRoomate">FIND ROOMATE</Link>
      </div>
      <div className="buttn">
        <button className="btn1">SIGNUP</button>
        <button className="btn1 btn2">LOGIN</button>
      </div>
    </div>
  );
}
export default NavBar;
