import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import CommonButton from "../../commoncomponents/button";
import Arrowrighticon from "../../assets/icons/arrowrighticon";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsScrolled(currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`${!isVisible ? "header-hidden" : ""} ${isVisible && isScrolled ? "header-shadow" : ""}`}>
      <div className="container">
        <div className="header-flx-main">
          <div className="header-logo">
            <NavLink to={"/"}>
              <Logo />
            </NavLink>
          </div>
          <div className="header-content">
            <NavLink to={"/"}>
              <span>Home</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>About</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>Price</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>Service</span>
            </NavLink>
          </div>
          <CommonButton 
            text="Contact Us"
            icon={<Arrowrighticon />}
            to="/contact"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
