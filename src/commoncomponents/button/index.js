import React from "react";
import "./button.scss";
import { NavLink } from "react-router-dom";
import Arrowrighticon from "../../assets/icons/arrowrighticon";

export default function CommonButton({ 
  variant = "primary",
  text = "contact us",
  icon = <Arrowrighticon />,
  to = "/" 
}) {
  return (
    <div className="common-buttons">
      <NavLink to={to}>
        <button type="button" className={`get-started-button ${variant}`}>
          <span>{text}</span>
        </button>
        <button type="button" className={`arrow-button ${variant}`}>
          {icon}
        </button>
      </NavLink>
    </div>
  );
}
