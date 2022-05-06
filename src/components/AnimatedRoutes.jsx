import React from "react";
import UI from "./UI";

import About from "./Sections/About/About";
import Works from "./Sections/Works/Works";

import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

export default function AnimatedRoutes(props) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.section
        className={ `section ${!props.isNavigationOpen ? 'full' : 'short' }` }
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<About activeSection={props.activeSection} setActiveSection={props.setActiveSection} variants={props.variants} />} />
          <Route path="about" element={<About activeSection={props.activeSection} setActiveSection={props.setActiveSection} variants={props.variants} />} />
          <Route path="works" element={<Works activeSection={props.activeSection} setActiveSection={props.setActiveSection} variants={props.variants} />} />
          <Route path="ui" element={<UI activeSection={props.activeSection} setActiveSection={props.setActiveSection} variants={props.variants} />} />
        </Routes>
      </motion.section>
    </AnimatePresence>
  );
}
