import React from "react";
import "./Main.css";
// import photo from "../../../assets/header-face.png";
import Navigation from "../../elemenets/Navigation/Navigation";
import { motion } from 'framer-motion';

export default function Main() {
  return (
    <motion.header className="section"   
    initial={{ opacity: 0, scale: 0.75 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{duration: 0.7, delay: 0.2 }}
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
      <Navigation />
    </motion.header>
  );
}
