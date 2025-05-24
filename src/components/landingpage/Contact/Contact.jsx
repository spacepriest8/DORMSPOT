import Chat from "../../../assets/chat.svg";
import Whatsapp from "../../../assets/whatsapp.svg";
import Email from "../../../assets/email.svg";
function Contact() {
  return (
    <div className="contactcontainer">
      <h1>Need Help?</h1>
      <div className="contactbutton">
        <button className="herobutton contactbtn">
          <img src={Chat} className="contactimg" />
          CHAT US
        </button>
        <button className="herobutton contactbtn">
          <img src={Email} className="contactimg" />
          EMAIL US
        </button>
        <button className="herobutton contactbtn">
          <img src={Whatsapp} className="contactimg" />
          WHATSAPP
        </button>
      </div>
    </div>
  );
}
export default Contact;
