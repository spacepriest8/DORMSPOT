import Chat from "../../../assets/chat.svg";
import Whatsapp from "../../../assets/whatsapp.svg";
import Email from "../../../assets/email.svg";

function Contact() {
  const handleChatClick = () => {
    alert("Chat feature coming soon!");
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:support@example.com?subject=Need Help&body=Hello, I need assistance with...";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "2348012345678";
    const message = "Hello, I need help regarding your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="contactcontainer">
      <h1>Need Help?</h1>
      <div className="contactbutton">
        <button className="herobutton contactbtn" onClick={handleChatClick}>
          <img src={Chat} className="contactimg" alt="Chat" />
          CHAT US
        </button>
        <button className="herobutton contactbtn" onClick={handleEmailClick}>
          <img src={Email} className="contactimg" alt="Email" />
          EMAIL US
        </button>
        <button className="herobutton contactbtn" onClick={handleWhatsAppClick}>
          <img src={Whatsapp} className="contactimg" alt="WhatsApp" />
          WHATSAPP
        </button>
      </div>
    </div>
  );
}

export default Contact;
