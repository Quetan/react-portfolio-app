import React from "react";
import "./About.css";

import PageNumber from "../../elemenets/PageNumber/PageNumber";
import Button from "../../elemenets/Button/Button";

import { motion } from "framer-motion";

export default function About(props) {
  let clickHandler = () => {};

  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{duration: 0.7, delay: 0.2 }}
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
          моей ее прямо раз диких своих ручеек журчит! Далеко-далеко за
          словесными горами в стране гласных и согласных живут, рыбные тексты.
          Вдали все но они, океана использовало заманивший свой жизни диких
          ручеек всеми имени. Запятых бросил предупредила текстов моей ее прямо
          раз диких своих ручеек журчит!
        </p>
        {/* <Button className="about-button" isButtonDisabled={false} buttonClickHandler={clickHandler} buttonModifier="btn-md" buttonValue="К портфолио"/> */}
      </div>
    </motion.section>
  );
}
