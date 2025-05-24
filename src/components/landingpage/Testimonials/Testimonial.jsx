import Sam from "../../../assets/sam.svg";
import Esther from "../../../assets/esther.svg";
import David from "../../../assets/david.svg";
import Star from "../../../assets/star.svg";
import Starimg from "../../../assets/starimg.svg";
function Testimonial() {
  return (
    <div className="testimonialcontainer">
      <h1> Testimonials</h1>
      <div className="testimonialprofile">
        <div className="profilecontainer">
          <div className="imagetext">
            <img src={Sam} className="imageprofile" />
            <p>
              Sam <br />
              BOWEN
            </p>
          </div>
          <p className="txt1">
            Made my hostel <br />
            search stress-free.
            <br /> Loved it
          </p>
          <div className="star">
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
          </div>
        </div>
        <div className="profilecontainer">
          <div className="imagetext">
            <img src={Esther} className="imageprofile" />
            <p>
              Esther <br />
              OAU
            </p>
          </div>
          <p className="txt1">
            it's so seamless and
            <br />
            reliable.
          </p>
          <div className="star">
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Starimg} className="starimg" />
          </div>
        </div>
        <div className="profilecontainer">
          <div className="imagetext">
            <img src={David} className="imageprofile" />
            <p>
              David <br />
              UNIZIK
            </p>
          </div>
          <p className="txt1">
            Found a great hostel <br />
            near campus in
            <br /> minutes.
          </p>
          <div className="star">
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
            <img src={Star} className="starimg" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
