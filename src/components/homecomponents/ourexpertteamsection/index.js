import React from "react";
import "./ourexpertteamsection.scss";
import Commonmarquee from "../../../commoncomponents/commonmarquee";
import rocket2 from "../../../assets/images/rocket2.png";
import Commontitlebutton from "../../../commoncomponents/commontitlebutton";
import Truwicon from "../../../assets/icons/truwicon";
import CommonButton from "../../../commoncomponents/button";
import Arrowrighticon from "../../../assets/icons/arrowrighticon";
import teampersonimage from "../../../assets/images/teampersonimage.png";
import clientshape from "../../../assets/images/client-shape.png";
import totalrevimage from "../../../assets/images/totalrevimage.png";
import whitetext from "../../../assets/images/white-text.png";
import { NavLink } from "react-router-dom";
import Crossicon from "../../../assets/icons/crossarrowicon";

export default function Ourexpertteamsection() {
  return (
    <div className="ourexpert-team-section-main">
      <div className="ourexpert-team-section">
        <div className="rocket2-image">
          <img src={rocket2} alt="rocket2" />
        </div>
        <div className="ourexpert-team-container">
          <div className="ourexpert-team-section-grd">
            <div className="ourexpert-team-section-grd-items-one">
              <div className="ourexpert-items-one-main-image-div">
                <img
                  src={teampersonimage}
                  alt="teampersonimage"
                  className="teampersonimage"
                />
                <div className="total-rev-image">
                  <img src={totalrevimage} alt="totalrevimage" />
                </div>
                <div className="clientshape-image">
                  <img src={clientshape} alt="clientshape" />
                </div>
                <NavLink to={"/"} className="circle-button-main">
                  <div className="circle-button">
                    <Crossicon />
                    <img src={whitetext} alt="whitetext" />
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="ourexpert-team-section-grd-items-two">
              <Commontitlebutton Text="our expert team" />
              <h1>Let's make something awesome together</h1>
              <p>
                Every pleasure is to be welcomed and every pain avoided. certain
                circumstances and owing to the claims welcomed and every pain
                avoided certain circumstances
              </p>
              <div className="oursexpert-check-grid">
                <div className="ursexpert-check-flx">
                  <Truwicon />
                  <p>30-day money back guarantee</p>
                </div>
                <div className="ursexpert-check-flx">
                  <Truwicon />
                  <p>Unlimited Application</p>
                </div>
                <div className="ursexpert-check-flx">
                  <Truwicon />
                  <p>Web site Marketing Solutions</p>
                </div>
                <div className="ursexpert-check-flx">
                  <Truwicon />
                  <p>24/7 system Monitoring</p>
                </div>
              </div>
              <div className="oursexpert-button">
                <CommonButton
                  text="EXPLORE MORE"
                  icon={<Arrowrighticon />}
                  to="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Commonmarquee />
    </div>
  );
}
