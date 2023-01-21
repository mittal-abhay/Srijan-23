import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loading-background">
      <div className="loading-container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
