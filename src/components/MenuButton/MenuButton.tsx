import React, { useState } from "react";
import "./MenuButton.scss";

export default function MenuButton() {
  const [menu, setMenu] = useState(false);

  return (
    <button
      className={`menu-button ${menu ? "menu-button--active" : ""}`}
      onClick={() => setMenu(!menu)}
    >
      <span className="menu-button__line"></span>
      <span className="menu-button__line"></span>
      <span className="menu-button__line"></span>
    </button>
  );
}
