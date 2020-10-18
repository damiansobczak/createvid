import React, { useState, useContext, useRef } from "react";
import "./Actions.scss";
import Popup from "../Popup/Popup";
import { ThumbnailContext } from "../../contexts/ThumbnailContext";

export default function Actions() {
  const elFavorite = useRef<HTMLSpanElement>(null);
  const [favorite, setFavorite] = useState(false);
  const { state } = useContext(ThumbnailContext);

  return (
    <div className="actions">
      <button className="actions__item" onClick={() => setFavorite((prevState) => !prevState)}>
        {state.like.length ? <span className="actions__counter">{state.like.length}</span> : null}
        <span className="icon-thumbs-up" ref={elFavorite}></span>
        <Popup open={favorite} setOpen={setFavorite} trigger={elFavorite} items={state.like} />
      </button>
      <button className="actions__item">
        <span className="icon-user"></span>
      </button>
    </div>
  );
}
