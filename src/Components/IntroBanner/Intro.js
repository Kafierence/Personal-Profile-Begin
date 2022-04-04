import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { motion } from "framer-motion";
import DivShow from "../DivShow/DivShow";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro-section">
      <div className="i-left">
        <p className="t-1">Hi! I am</p>
        <p className="t-name">Fierence Kalist </p>
        <p className="t-normal">
          I'm will be a developer with combination MERN + OTher teachnology
        </p>
        <button className="button i-btn">Hire Me</button>
        <ul className="i-link">
          <li>
            <a href="https://github.com/Kafierence">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100019553707449">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector Blue" />
        <img src={Vector2} alt="Vector Yellow" />
        <img src={boy} alt="The boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "78%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <DivShow img={thumbup} text1="Award" text2="Practice EveryDay" />
        </motion.div>

        <motion.div
          initial={{ left: "4rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <DivShow img={crown} text1="Web" text2="Developer" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
