import React from "react";
import "./Actions.scss";

export default function Actions() {
    return (
        <div className="actions">
            <button className="actions__item">
                <span className="icon-search"></span>
            </button>
            <button className="actions__item">
                <span className="actions__counter">3</span>
                <span className="icon-bell"></span>
            </button>
            <button className="actions__item">
                <span className="icon-user"></span>
            </button>
        </div>
    );
}
