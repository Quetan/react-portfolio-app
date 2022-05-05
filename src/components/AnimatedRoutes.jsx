import React from 'react'
import UI from "./UI";

import Main from "./Sections/Main/Main";
import About from "./Sections/About/About";
import Works from "./Sections/Works/Works";

import { AnimatePresence } from 'framer-motion';

import { Routes, Route,useLocation } from 'react-router-dom'

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="ui" element={<UI />} />
        </Routes>
    </AnimatePresence>
  )
}
