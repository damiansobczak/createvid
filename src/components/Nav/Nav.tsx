import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="nav">
      <button className={`nav__lines ${menu ? "nav__lines--active" : ""}`} onClick={() => setMenu(!menu)}>
        <span className="nav__line"></span>
        <span className="nav__line"></span>
        <span className="nav__line"></span>
      </button>
      <ul className={`nav__list ${menu ? "nav__list--active" : ""}`}>
        <li className="nav__item nav__item--active">
          <Link to="" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Categories
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
