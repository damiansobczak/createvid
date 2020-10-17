import React from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Actions from "../Actions/Actions";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Nav />
      <Actions />
    </div>
  );
}
