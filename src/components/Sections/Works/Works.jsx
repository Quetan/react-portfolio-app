import React, { useEffect } from "react";
import "./Works.css";

import { motion } from "framer-motion";

import PageNumber from "../../elemenets/PageNumber/PageNumber";

export default function Works(props) {
  useEffect(() => {
    props.setActiveSection("works");
  }, [props.activeSection]);

  return (
    <motion.div
      className="about-section"
      variants={props.variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PageNumber number={props.pageNumber} />
      <h2 className="about-title">
        About <br /> me
      </h2>
      <div className="about-content">
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут,
          рыбные тексты. Вдали все но они, океана использовало заманивший свой
          жизни диких ручеек всеми имени. Запятых бросил предупредила текстов
          моей ее прямо раз диких своих ручеек журчит!
        </p>
      </div>
    </motion.div>
  );
}
