import React from "react";
import "./Main.css";
// import photo from "../../../assets/header-face.png";
import Navigation from "../../elemenets/Navigation/Navigation";
import { motion } from 'framer-motion';

export default function Main(props) {

  return (
    <motion.header className="section" 
      variants={props.variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <div className="header-image-wrapper">
        <div className="header-circle">
          <img className="header-image" src={photo} alt="" />
        </div>
        <h1 className="header-title">Коркин <br /> Кирилл Сергеевич</h1>
            <span className="header-subtitle">FrontEnd Developer</span>
      </div>
      <div className="header-content">
        <h1 className="header-title">
          Коркин <br /> Кирилл Сергеевич
        </h1>
        <span className="header-subtitle">FrontEnd Developer</span>
      </div> */}
    </motion.header>
  );
}
