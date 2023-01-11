import React from "react";
import "../DJLightsRow/djLightsRow.css";

export default function DJLightsRow(props) {
  var dots = [];
  for (let i = 0; i < (props.count ? props.count : 10); i++)
    dots.push(
      <div
        className="dot"
        style={{ animationDelay: `${0.1 * i}s` }}
        key={i}
      ></div>
    );

  return (
    <div className="dj-lights-row-wrapper">
      <div className="dj-lights-row">{dots}</div>
      {/* <div className="dj-lights-row">
          <div className="dot"/>
        </div> */}
    </div>
  );
}
