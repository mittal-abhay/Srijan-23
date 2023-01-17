import React from "react";
import "./pastPerformers.css";
import PastPerformersCard from "./PastPerformersCard";
import darshan from "./../../assets/pastPerformers/darshan.webp";
import jubin from "./../../assets/pastPerformers/jubin.webp";
import nb from "./../../assets/pastPerformers/nb.webp";

export default function PastPerformers() {
  return (
    <div className="past-performers-section">
      <PastPerformersCard
        name="Darshan Raval"
        image={darshan}
        occupation="Singer"
        description="Thank You IIT-ISM, it was great singing for you all and I hope you guys equally enjoyed as much as I did"
      />
      <PastPerformersCard
        name="Jubin Nautiyal"
        image={jubin}
        occupation="Singer"
        description="What an amazing crowd it was at IIT-ISM !! Such great energy and such great enthusiasm always make live performances magical. Thank you for singing along and making it special. You were truly magical !!!"
        alignRight
      />
      <PastPerformersCard
        name="Nalayak Band"
        image={nb}
        occupation="DJ and Band group"
        description="IIT-ISM Dhanbad you were truly out of the world. What crazy crazy energy and what amazing love did you reciprocate back. You were looking forward to coming back here to witness this lively insane audience. Yahi tera waqt hai IIT-ISM Dhanbad !!"
      />
    </div>
  );
}
