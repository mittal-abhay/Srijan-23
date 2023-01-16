import React from "react";
import "./Homeabout.css";
import img1 from "../../assets/aboutImg.jfif";
import img2 from "../../assets/Gallery1.jpg";
import { Link } from "react-router-dom";
// import img2 from "../assets/Gallery2.jpg";
export default function Homeabout() {
  return (
    <div>
      <div className="drop-container">
        <div className="drop-image1">
          <img src={img1} alt="" />
        </div>
        <div className="drop">
          <div className="drop-content">
            <h2 className="drop-heading">About Us</h2>
            <p style={{ textAlign: "justify" }}>
              SRIJAN is the biggest socio-cultural festival in eastern India
              which has been in the limelight since 1977. It attracts an annual
              footfall of over 30,000 from more than 200 colleges across the
              country and has prize money worth more than INR 7.5 lakhs. It
              offers a fantastic platform where participants from different
              parts of the country get an opportunity to interact, enhance and
              demonstrate their creativity, personality, and talents
            </p>
            <Link to={"/about-us"}>
              <a href="#">Read More</a>
            </Link>
          </div>
        </div>
        <div className="drop-container reverse">
          <div className="drop-image2">
            <img src={img2} alt="" />
          </div>
          <div className="drop">
            <div className="drop-content">
              <h2 className="drop-heading">Events</h2>
              <p style={{ textAlign: "justify" }}>
                Over 50 events are strategically planned and scheduled to be
                organized during this 3-day grandiose fest. Not only will these
                events provide a great platform for the enthusiastic
                participants from all over the country to showcase their
                awe-inspiring talents, but they are also enthralling. We have a
                lot of exciting events in store for you! Watch this space
                closely to stay tuned about all events!
              </p>
              <Link to={"/club-events"}>
                <a href="#">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
