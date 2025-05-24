import LadyImage from "../../../assets/eclipselady.svg";
function Header() {
  return (
    <div className="headercontainer">
      <div className="headertext">
        <h1>
          Find <span className="blue">Hostels</span> you
          <br />
          can <span className="yellow">Trust</span> without <br />
          stress
        </h1>
        <p>
          Verified listings, flexible payment, and the <br /> roommate you've
          been hoping for
        </p>
        <button className="herobutton">EXPLORE LISTINGS</button>
      </div>
      <div className="headerimg"></div>
      <img src={LadyImage} className="headerimage" />
    </div>
  );
}
export default Header;
