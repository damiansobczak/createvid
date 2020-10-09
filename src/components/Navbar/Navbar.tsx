import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MenuButton from "../MenuButton/MenuButton";
import Actions from "../Actions/Actions";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <MenuButton />
      <Nav />
      <Actions />
    </div>
  );
}
