import React from 'react'
import './Works.css'

import PageNumber from "../../elemenets/PageNumber/PageNumber"

export default function Works(props) {
  return (
    <section className="section works-section">
        <PageNumber number={props.pageNumber} />
        <h2 className="about-title">About <br /> me</h2>
      <div className="about-content">
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Вдали все но они, океана использовало заманивший свой жизни диких ручеек всеми имени. Запятых бросил предупредила текстов моей ее прямо раз диких своих ручеек журчит!
        </p>
      </div>
    </section>
  )
}
