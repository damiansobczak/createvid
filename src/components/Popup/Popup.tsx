import React, { useState, useEffect, useRef } from "react";
import "./Popup.scss";
import { IPopupAPI } from "../../utils/db";
import { IPopupProps } from "./Interfaces";

export default function Popup(props: IPopupProps) {
  const [open, setOpen] = useState(props.open);
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClick = (e: any) => {
    if (el.current && !el.current.contains(e.target) && !e.target.contains(props.trigger.current)) {
      setOpen((open) => (open = false));
      props.setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => handleClick(e));
    return () => {
      document.removeEventListener("click", (e) => handleClick(e));
    };
  });

  if (!props.items.length) {
    return (
      <div className={`popup ${open ? "popup--active" : ""}`} ref={el}>
        <div className="popup__empty">
          Your favorites are empty :(
          <p>You can add something by hovering over on any thumbnail of your choice.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`popup ${open ? "popup--active" : ""}`} ref={el}>
      {props.items.map((item: IPopupAPI) => (
        <div className="popup__item" key={item.id}>
          <img className="popup__media" src={item.thumbnail} alt="" />
          <div className="popup__info">
            <div className="popup__title">{item.title}</div>
            <div className="popup__desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
