import React from 'react'
import './index.css'
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from 'framer-motion';
const Services = () => {
    const transition = {
        duration: 1,
        type: "spring",
      };
  return (
   <div className="services">
       <div className="content">
       <div className="i-left">
        <p className="t-1">My Services</p>
        <p className="t-name">Awsome Dev Tool </p>
        <span className="t-normal t-limit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, inventore eum.
          <br />
          That You and me 
    
        </span>
        <button className="button s-btn">Download CV</button>
        </div>
       </div>
       <div className="card-services">
       <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "75rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       </div>
   </div>
  )
}

export default Services