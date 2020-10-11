import React from "react";
import "./Copyright.scss";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <div className="copyright">
      © 2020 Eve Nevada, LLC. | Design <Link to="http://github.com/damiansobczak">Damian Sobczak</Link>
    </div>
  );
}
