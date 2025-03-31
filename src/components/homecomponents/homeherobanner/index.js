import React from "react";
import "./homeherobanner.scss";
import homeherobannerimage from "../../../assets/images/homeherobannerimage.png";
import { NavLink } from "react-router-dom";
import CommonButton from "../../../commoncomponents/button";
import Arrowrighticon from "../../../assets/icons/arrowrighticon";

export default function Homeherobanner() {
  return (
    <div className="homeherobanner-main">
      <div className="container">
        <div className="homeherobanner-content-grid">
          <div className="homeherobanner-content-left">
            <h6>go for advertising</h6>
            <h1>
              Achieve <span>Top Search</span> Rankings With Our SEO services
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised
            </p>
            <div className="homeherobanner-buttons-alignment">
              <CommonButton
                text="EXPLORE MORE"
                icon={<Arrowrighticon />}
                to="/contact"
              />
              <NavLink to={"/"} className="explore-link">
                explore more
              </NavLink>
            </div>
          </div>
          <div className="homeherobanner-content-right">
            <div className="homeherobanner-content-right-img">
              <img src={homeherobannerimage} alt="homeherobannerimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
