import React, { useState } from "react";
import "./Actions.scss";
import Notifications from "../Notifications/Notifications";

export default function Actions() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="actions">
      <button className="actions__item">
        <span className="icon-search"></span>
      </button>
      <button className="actions__item" onClick={() => setToggle((prevState) => !prevState)}>
        <span className="actions__counter">3</span>
        <span className="icon-bell"></span>
        <Notifications isOpen={toggle} />
      </button>
      <button className="actions__item">
        <span className="icon-user"></span>
      </button>
    </div>
  );
}
