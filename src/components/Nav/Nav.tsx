import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav">
      <li className="nav__item nav__item--active">
        <Link to="" className="nav__link">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/categories" className="nav__link">
          Categories
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/settings" className="nav__link">
          Settings
        </Link>
      </li>
    </ul>
  );
}
