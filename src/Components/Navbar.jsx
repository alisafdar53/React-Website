import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
              <span>S</span>tark <i className="fab fa-typo3" />
            </Link>

            <div className="menu__icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <ul className={click ? "nav__menu active" : "nav__menu"}>
              <li className="nav__item">
                <Link
                  to="/home"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button ButtonStyle="btn--outline">Sign Up</Button>}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
