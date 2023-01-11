import React from "react";
import "../HomeGallery/gallery.css";
import { useRef, useEffect } from "react";
import Gallery1 from "../../assets/Gallery1.jpg";
import Gallery2 from "../../assets/Gallery2.jpg";
import Gallery3 from "../../assets/Gallery3.jpg";
export default function Gallery() {
  const galleryWrapper = useRef(null);
  const galleryImageWrapper = useRef(null);
  const galleryTextWrapper = useRef(null);
  const image1 = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        galleryImageWrapper.current.classList.add("stomp");
        setTimeout(() => {
          galleryImageWrapper.current.classList.remove("stomp");
        }, 500);
      }
    });
  });

  useEffect(() => {
    observer.observe(galleryWrapper.current);
  }, []);

  return (
    <div className="gallery-wrapper" ref={galleryWrapper}>
      <div className="gallery-image-wrapper" ref={galleryImageWrapper}>
        <div className="gallery-image image1" ref={image1}></div>
        <div className="gallery-image image2"></div>
        <div className="gallery-image image3"></div>
      </div>
      <div className="gallery-text-wrapper" ref={galleryTextWrapper}>
        <div className="gallery-text text1"></div>
        <div className="gallery-text text2"></div>
        <div className="gallery-text text3"></div>
      </div>
    </div>
  );
}
