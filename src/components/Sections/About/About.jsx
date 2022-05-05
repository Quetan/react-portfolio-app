import React from "react";
import "./About.css";

import PageNumber from "../../elemenets/PageNumber/PageNumber";
import Button from "../../elemenets/Button/Button";

export default function About(props) {

  let clickHandler = () => {
  }

  return (
    <section id="about" className="section about-section">
      <PageNumber number={props.pageNumber} />
      <h2 className="about-title">About <br /> me</h2>
      <div className="about-content">
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Вдали все но они, океана использовало заманивший свой жизни диких ручеек всеми имени. Запятых бросил предупредила текстов моей ее прямо раз диких своих ручеек журчит! Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Вдали все но они, океана использовало заманивший свой жизни диких ручеек всеми имени. Запятых бросил предупредила текстов моей ее прямо раз диких своих ручеек журчит! 
        </p>
        {/* <Button className="about-button" isButtonDisabled={false} buttonClickHandler={clickHandler} buttonModifier="btn-md" buttonValue="К портфолио"/> */}
      </div>
    </section>
  );
}
