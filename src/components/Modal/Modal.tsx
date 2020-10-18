import React, { useContext } from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";

export default function Modal() {
  const { modalState, modalDispatch } = useContext(ModalContext);

  if (modalState.film) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__header">
            <h3 className="modal__title">{modalState.film?.["im:name"].label}</h3>
            <button className="modal__close" onClick={() => modalDispatch({ type: "CLOSE" })}>
              <span className="icon-arrow-right"></span>
            </button>
          </div>
          <div className="modal__content">
            <div className="modal__overall">
              <img src={modalState.film?.["im:image"][2].label} alt="" className="modal__media" />
            </div>
            <div className="modal__info">
              <p>{modalState.film?.summary.label}</p>
              <div className="modal__meta">
                <p>
                  <span>Release:</span> {modalState.film?.["im:releaseDate"].attributes.label}
                </p>
                ,
                <p>
                  <span>Artist:</span> {modalState.film?.["im:artist"].label}
                </p>
                ,
                <p>
                  <span>Category:</span> {modalState.film?.category.attributes.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#root") as HTMLElement
    );
  } else {
    return null;
  }
}
