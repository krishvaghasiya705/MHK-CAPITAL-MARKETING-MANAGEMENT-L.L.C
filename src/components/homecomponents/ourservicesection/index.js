import React from "react";
import "./ourservicesection.scss";
import homeannoucingimage from "../../../assets/images/homeannoucingimage.png";
import ourservicesshapeimage from "../../../assets/images/ourservicesshapeimage.png";
import { NavLink } from "react-router-dom";
import Arrowrighticon from "../../../assets/icons/arrowrighticon";

import ourservicesimage1 from "../../../assets/images/ourservicesimage1.png"
import ourservicesimage2 from "../../../assets/images/ourservicesimage2.png"
import ourservicesimage3 from "../../../assets/images/ourservicesimage3.png"
import Commontitlebutton from "../../../commoncomponents/commontitlebutton";

export default function Ourservicesection() {
  return (
    <div className="ourservicesection-main">
      <div className="ourservicesection-cartoon-one">
        <img src={homeannoucingimage} alt="homeannoucingimage" />
      </div>
      <div className="ourservicesection-shapeimage">
        <img src={ourservicesshapeimage} alt="ourservicesshapeimage" />
      </div>
      <div className="container">
        <div className="our-services-title">
          <Commontitlebutton Text="our services"/>
          <h2>Use SEO to Drive Growth at Your Business</h2>
        </div>
        <div className="our-services-grid">
          <div className="our-services-grid-item">
            <div className="our-services-grid-item-image">
              <img src={ourservicesimage1} alt="ourservicesimage1" />
            </div>
            <div className="our-services-grid-item-content">
              <NavLink to={"/"} className="page-links">
                SEO Marketing
              </NavLink>
              <p>
                Collaboratively formulate principle capital doing progressively
                evolve user
              </p>
              <NavLink to={"/"} className="read-button-main">
                <button type="button" className="read-button">
                  <span>Read more</span>
                  <Arrowrighticon />
                </button>
              </NavLink>
            </div>
          </div>
          <div className="our-services-grid-item">
            <div className="our-services-grid-item-image">
              <img src={ourservicesimage2} alt="ourservicesimage2" />
            </div>
            <div className="our-services-grid-item-content">
              <NavLink to={"/"} className="page-links">
                Social Media Marketing
              </NavLink>
              <p>
                Collaboratively formulate principle capital doing progressively
                evolve user
              </p>
              <NavLink to={"/"} className="read-button-main">
                <button type="button" className="read-button">
                  <span>Read more</span>
                  <Arrowrighticon />
                </button>
              </NavLink>
            </div>
          </div>
          <div className="our-services-grid-item">
            <div className="our-services-grid-item-image">
              <img src={ourservicesimage3} alt="ourservicesimage3" />
            </div>
            <div className="our-services-grid-item-content">
              <NavLink to={"/"} className="page-links">
                Email Marketing
              </NavLink>
              <p>
                Collaboratively formulate principle capital doing progressively
                evolve user
              </p>
              <NavLink to={"/"} className="read-button-main">
                <button type="button" className="read-button">
                  <span>Read more</span>
                  <Arrowrighticon />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
