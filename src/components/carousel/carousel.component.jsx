import "./carousel.styles.css";
import React from "react";
import { useRef, useState } from "react";
import { bottom } from "@popperjs/core";
import { FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const carousel = useRef(null);
  const cells = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const [selectedIndex, setselectedIndex] = useState(1);
  const [isHorizontal, setisHorizontal] = useState(true);

  var cellWidth = carousel.offsetWidth;
  var cellHeight = carousel.offsetHeight;
  // var isHorizontal = true;

  var rotateFn = isHorizontal ? "rotateY" : "rotateX";
  var cellCount = 9;
  var theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  // var radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  var radius = 380;
  console.log(radius);

  function rotateCarousel() {
    console.log("2nd");
    var angle = theta * selectedIndex * -1;
    console.log(`carousel: ${carousel.current.style.transform}`);
    console.log(
      "translateZ(" + radius + "px) " + rotateFn + "(" + angle + "deg)"
    );
    carousel.current.style.transform =
      "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
    console.log(`carousel: ${carousel.current.style.transform}`);
  }

  const previous = () => {
    setselectedIndex(selectedIndex - 1);
    console.log("1stt");
    rotateCarousel();
  };

  const next = () => {
    setselectedIndex(selectedIndex + 1);
    rotateCarousel();
  };

  // var cellsRange = document.querySelector('.cells-range');
  // cellsRange.addEventListener( 'change', changeCarousel );
  // cellsRange.addEventListener( 'input', changeCarousel );

  // function changeCarousel() {
  //   cellCount = cellsRange.value;
  //   theta = 360 / cellCount;
  //   var cellSize = isHorizontal ? cellWidth : cellHeight;
  //   radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  //   for ( var i=0; i < cells.length; i++ ) {
  //     var cell = cells[i];
  //     if ( i < cellCount ) {
  //       // visible cell
  //       cell.style.opacity = 1;
  //       var cellAngle = theta * i;
  //       cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
  //     } else {
  //       // hidden cell
  //       cell.style.opacity = 0;
  //       cell.style.transform = 'none';
  //     }
  //   }

  //   rotateCarousel();
  // }

  // var orientationRadios = document.querySelectorAll('input[name="orientation"]');
  // ( function() {
  //   for ( var i=0; i < orientationRadios.length; i++ ) {
  //     var radio = orientationRadios[i];
  //     radio.addEventListener( 'change', onOrientationChange );
  //   }
  // })();

  // function onOrientationChange() {
  //   var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  //   isHorizontal = checkedRadio.value == 'horizontal';
  //   rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  //   changeCarousel();
  // }

  // // set initials
  // onOrientationChange();
  return (
    <>
      <div className="scene">
        <div className="carousel" ref={carousel}>
          <div className="carousel__cell" ref={cells}>
            {/* <img src="../../assets/3.jpg" alt="" style={{width:"30px", objectFit:"contain"}}/> */}
          </div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
          <div className="carousel__cell" ref={cells}></div>
        </div>
      </div>

      <div className="carousel-options">
        

        <FaChevronRight ref={nextButton} onClick={next} />
      </div>
    </>
  );
};

export default Carousel;
