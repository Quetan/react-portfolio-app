import React from "react";
import "./About.css";

import PageNumber from "../../PageNumber/PageNumber";
import Button from "../../Button/Button";

export default function About(props) {

  let clickHandler = () => {
    alert('Я родився!')
  }

  return (
    <section className="section about-section">
      <PageNumber number={props.pageNumber} />
      <h2 className="about-title">About <br /> me</h2>
      <div className="about-content">
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Вдали все но они, океана использовало заманивший свой жизни диких ручеек всеми имени. Запятых бросил предупредила текстов моей ее прямо раз диких своих ручеек журчит!
        </p>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Вдали все но они, океана использовало заманивший свой жизни диких ручеек всеми имени. Запятых бросил предупредила текстов моей ее прямо раз диких своих ручеек журчит!
        </p>
        <Button className="about-button" isButtonDisabled={false} buttonClickHandler={clickHandler} buttonModifier="btn-md" buttonValue="К портфолио"/>
      </div>
    </section>
  );
}
