import Footerlogo from "../../../assets/footerlogo.svg";
import Facebookimage from "../../../assets/facebookimage.svg";
import Twitterimage from "../../../assets/whatsappimage.svg";
import Instagramimage from "../../../assets/instagramimg.svg";
import Whatsappimage from "../../../assets/twitterimage.svg";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="logolink">
        <img src={Footerlogo} className="footerlogo" alt="Logo" />
        <h5 className="footertext">
          Making student housing <br /> simple and secure
        </h5>
        <div className="connect">
          <h5>CONNECT</h5>
          <div className="socials">
            <img src={Facebookimage} />
            <img src={Instagramimage} />
            <img src={Twitterimage} />
            <img src={Whatsappimage} />
          </div>
        </div>
      </div>

      <div className="companydetails">
        <div className="about">
          <h4>About Us</h4>
          <ul>
            <li>Who we are</li>
            <li>Features</li>
            <li>News & Blog</li>
          </ul>
        </div>
        <div className="about">
          <h4>Company</h4>
          <ul>
            <li>How we work?</li>
            <li>Capital</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="about">
          <h4>Support</h4>
          <ul>
            <li>FAQ's</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="about">
          <h4>Logout</h4>
          <ul>
            <li>Govt policy</li>
            <li>Documents</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
{
  /* 
      </div>
      <div className="companydetails">
        <div className="about">
          <h5>About Us</h5>
        </div>
        <div className="company">
          <h5>Company</h5>
        </div>
        <div className="help">
          <h5>Support</h5>
        </div>
        <div className="logout">
          <h5>Logout</h5>
        </div>
      </div> */
}
