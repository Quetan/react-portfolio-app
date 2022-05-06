import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Navigation.css";

export default function Navigation(props) {
  return (
    <motion.nav
      ref={props.menuRef}
      initial={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.1 }}
      className={`${props.modifier} ${
        props.isNavigationOpen ? "open" : "closed"
      }`}
    >
      <ul className="navigation-list">
        <li className={`navigation-item ${props.activeSection === "about" ? 'active' : null}`}>
          <Link className="navigation-link" to="/about">Обо мне</Link>
        </li>
        <li className={`navigation-item ${props.activeSection === "works" ? 'active' : null}`}>
          <Link className="navigation-link" to="/works">Работы</Link>
        </li>
        <li className={`navigation-item ${props.activeSection === "ui" ? 'active' : null}`}>
          <Link className="navigation-link" to="/ui">UI</Link>
        </li>
      </ul>

      <motion.button
        className={
          "navigation-button " + (props.isNavigationOpen ? "open" : "closed")
        }
        drag="x"
        dragConstraints={{ left: 3, right: 3 }}
        dragElastic={0.4}
        onDragStart={() => props.setNavigationOpen(!props.isNavigationOpen)}
        onClick={() => props.setNavigationOpen(!props.isNavigationOpen)}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
        // whileInView={{ opacity: 0 }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{
            scale: 1.2,
          }}
          transition={{
            type: "spring",
            duration: 2,
          }}
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: "circIn" },
            }}
            d="M94.71,49.29l-44-44a1.01424,1.01424,0,0,0-1.42,0l-44,44a.035.035,0,0,1-.00995.02.9901.9901,0,0,0,0,1.38.035.035,0,0,1,.00995.02l44,44a1.01409,1.01409,0,0,0,1.42,0l44-44a1.01416,1.01416,0,0,0,0-1.42ZM49,91.59,9.6,52.19,49,64.73Zm0-28.95L7.86,49.55,49,8.41Zm2,28.95V64.73L90.38,52.2Zm0-28.95V8.41L92.13,49.55Z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5, ease: "circIn" },
            }}
            d="M42.42022,39.70319l1.90585-.64042a1.06886,1.06886,0,0,0,.64972-1.3266A.99051.99051,0,0,0,43.71966,37.05l-1.90585.64043a1.06886,1.06886,0,0,0-.64972,1.32659A.99051.99051,0,0,0,42.42022,39.70319Zm-7.6234,2.5617,1.90585-.64042a1.06887,1.06887,0,0,0,.64972-1.3266.99051.99051,0,0,0-1.25613-.68617l-1.90585.64042a1.06888,1.06888,0,0,0-.64972,1.3266A.99052.99052,0,0,0,34.79682,42.26489Zm-7.6234,2.5617,1.90585-.64043a1.06885,1.06885,0,0,0,.64972-1.32659.99051.99051,0,0,0-1.25613-.68617l-1.90585.64043a1.06885,1.06885,0,0,0-.64972,1.32659A.99051.99051,0,0,0,27.17342,44.82659ZM19.55,47.3883l1.90586-.64043a1.06887,1.06887,0,0,0,.64972-1.3266.99051.99051,0,0,0-1.25613-.68616l-1.90585.64042a1.06887,1.06887,0,0,0-.64973,1.3266A.99052.99052,0,0,0,19.55,47.3883ZM11.92661,49.95l1.90585-.64043a1.06885,1.06885,0,0,0,.64972-1.32659.99051.99051,0,0,0-1.25613-.68617l-1.90585.64043a1.06885,1.06885,0,0,0-.64972,1.32659A.99051.99051,0,0,0,11.92661,49.95Z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2, ease: "circIn" },
            }}
            d="M58.18618,37.69043,56.28033,37.05a.99051.99051,0,0,0-1.25613.68617,1.06887,1.06887,0,0,0,.64972,1.3266l1.90585.64042A.99051.99051,0,0,0,58.8359,39.017,1.06885,1.06885,0,0,0,58.18618,37.69043Zm7.6234,2.56169-1.90585-.64042a.99052.99052,0,0,0-1.25613.68617,1.06887,1.06887,0,0,0,.64972,1.3266l1.90585.64042a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,65.80958,40.25212Zm7.6234,2.56171-1.90585-.64043a.99051.99051,0,0,0-1.25613.68617,1.06886,1.06886,0,0,0,.64972,1.32659l1.90585.64043a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,73.433,42.81383Zm7.6234,2.5617-1.90584-.64042a.9905.9905,0,0,0-1.25613.68616,1.06887,1.06887,0,0,0,.64972,1.3266L80.45,47.3883a.99051.99051,0,0,0,1.25613-.68617A1.06887,1.06887,0,0,0,81.05638,45.37553Zm7.62341,2.56171-1.90585-.64043a.99051.99051,0,0,0-1.25613.68617,1.06886,1.06886,0,0,0,.64972,1.32659l1.90585.64043a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,88.67979,47.93724Z"
          />
        </motion.svg>
      </motion.button>
    </motion.nav>
  );
}
