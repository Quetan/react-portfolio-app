import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <nav className={"navigation " + props.modifier}>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/about">Обо мне</Link>
        </li>
        <li className="navigation-item">
          <Link to="/ui">UI</Link>
        </li>
      </ul>
    </nav>
  );
}
