import React from "react";
import "./Film.css";
import img1 from "../../assets/film/1.webp";
import img2 from "../../assets/film/2.jpg";
import img3 from "../../assets/film/3.jfif";
export default function Film() {
  return (
    <div>
      <div className="film-section-wrapper">
        <div className="film-strip back1">
          <div className="film-strip-images-wrapper">
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="film-strip back2">
          <div className="film-strip-images-wrapper">
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="film-strip front">
          <div className="film-strip-images-wrapper">
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img1} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img2} alt="" />
            </div>
            <div className="film-strip-image">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
