import React from "react";
import "./Footer.scss";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container grid">
        <div className="grid__col--12 grid__col--lg-6">
          <div className="footer__desc">
            <h5>Black ops organization, traveling the globe.</h5>
            <p>Ava (Jessica Chastain) is a deadly assassin who works for a black ops organization, traveling the globe.</p>
          </div>
        </div>
        <div className="grid__col--12 grid__col--sm-6 grid__col--lg-3">
          <h6>Office Address</h6>
          <p>
            Patricia C. Amedee 4401 <br />
            Waldeck Street Grapevine Nashville, <br />
            Tx 76051
          </p>
        </div>
        <div className="grid__col--12 grid__col--sm-6 grid__col--lg-3">
          <h6>Office Address</h6>
          <p>
            info@yourdomain.com, <br />
            +7 (212) 654-33-35
          </p>
        </div>
        <div className="footer__bottom grid__col--12">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__nav">
            <Nav />
          </div>
          <div className="footer__social">
            <Link to="#">
              <span className="icon-facebook"></span>
            </Link>
            <Link to="#">
              <span className="icon-instagram"></span>
            </Link>
            <Link to="#">
              <span className="icon-twitter"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
