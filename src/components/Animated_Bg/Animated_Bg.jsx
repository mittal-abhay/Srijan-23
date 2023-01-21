import { useEffect, useState } from "react";
import React from "react";
import "./Animated_Bg.css";

export default function Animated_Bg() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    var tempDots = [];
    /*eslint-disable-next-line no-restricted-globals*/
    for (let i = 0; i < window.innerWidth / 15; i++) {
      tempDots.push(
        <span
          key={i}
          style={{
            animationDuration: `${100 / Math.floor(Math.random() * 25 + 5)}s`,
            bottom: `${Math.floor(Math.random() * 25)}px`,
          }}
        ></span>
      );
    }
    setDots(tempDots);
  }, []);

  return (
    <div className="animatedBg">
      <div className="bubbles">{dots.map((dot) => dot)}</div>
    </div>
  );
}
