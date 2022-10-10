import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../images";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect(()=>{

setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return (
    <section className="slider">
    <motion.div ref={carousel} className="carousel " whileTap={{cursor:"grabbing"}}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel d-flex "
      >
        {images.map((image) => {
          return (
            <motion.div className="item p-4" key={image}>
              <img  src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
    </section>
  );
};

export default Slider;
