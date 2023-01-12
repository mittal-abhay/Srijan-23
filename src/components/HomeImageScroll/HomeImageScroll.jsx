import React from "react";
import "./homeImageScroll.css";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/3.webp";
import img3 from "../../assets/14.webp";
import img4 from "../../assets/0.webp";
import img5 from "../../assets/16.webp";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeImageScroll() {
  const headings = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gallery-wrapper",
          start: "center center",
          end: "bottom top",
          scrub: true,
          markers: false,
          pin: true,
        },
      })
      .from(headings.current, {
        x: innerWidth * -3 /* eslint-disable-line no-restricted-globals */,
      })
      .to(headings.current, { scale: 2 })
      .from(box1.current, {
        x: innerWidth * -3 /* eslint-disable-line no-restricted-globals */,
      })
      .from(box2.current, {
        x: innerWidth * 3 /* eslint-disable-line no-restricted-globals */,
      })
      .from(box3.current, {
        x: innerWidth * -3 /* eslint-disable-line no-restricted-globals */,
      })
      .from(box4.current, {
        x: innerWidth * 3 /* eslint-disable-line no-restricted-globals */,
      })
      .from(box5.current, {
        x: innerWidth * -3 /* eslint-disable-line no-restricted-globals */,
      });
  }, []);

  /*
<script type="text/javascript">
    gsap.timeline({
        scrollTrigger: {
            trigger: ".gallery-wrapper",
            start: "center center",
            end: "bottom top",
            scrub: true,
            pin: true,
        }
    })
        .from(".headings", { x: innerWidth * -3 })
        .to(".headings", { scale: 3 })
        .from(".box1", { x: innerWidth * -3 })
        .from(".box2", { x: innerWidth * 3 })
        .from(".box3", { x: innerWidth * -3 })
        .from(".box4", { x: innerWidth * 3 })
        .from(".box5", { x: innerWidth * -3 })
</script>
    */
  return (
    <section className="gallery-wrapper">
      <div className="headings" ref={headings}>
        Highlights
        <p>
          Srijan is the largest cultural and social fest of eastern India and
          boasts of many exciting and thrilling events all over 3 whole days.
        </p>
      </div>
      <div className="spacer" />
      <div className="image-scroll-box box1" ref={box1}>
        <img className="scroll-img1" src={img1} alt="1" key={1} />
      </div>
      <div className="image-scroll-box box2" ref={box2}>
        <img className="scroll-img2" src={img2} alt="2" />
      </div>
      <div className="image-scroll-box box3" ref={box3}>
        <img className="scroll-img3" src={img3} alt="" />
      </div>
      <div className="image-scroll-box box4" ref={box4}>
        <img className="scroll-img4" src={img4} alt="" />
      </div>
      <div className="image-scroll-box box5" ref={box5}>
        <img className="scroll-img5" src={img5} alt="" />
      </div>
    </section>
  );
}
