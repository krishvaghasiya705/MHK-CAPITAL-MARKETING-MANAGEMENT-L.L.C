import React from "react";
import "./whychooseussection.scss";
import bgshape2 from "../../../assets/images/bg-shape-2.png";
import chooseus from "../../../assets/images/choose-us.png";
import Commontitlebutton from "../../../commoncomponents/commontitlebutton";
import CommonButton from "../../../commoncomponents/button";
import Arrowrighticon from "../../../assets/icons/arrowrighticon";
import ctamarketing from "../../../assets/images/cta-marketing.png";
import Commontitlebuttonsecond from "../../../commoncomponents/commontitlebuttonsecond";

export default function Whychooseussection() {
  return (
    <div className="whychooseus-section-main">
      <div className="bgshape2-image">
        <img src={bgshape2} alt="bgshape2" />
      </div>
      <div className="whychooseus-container">
        <div className="whychooseus-grd">
          <div className="whychooseus-grd-item-left">
            <img src={chooseus} alt="chooseus" />
          </div>
          <div className="whychooseus-grd-item-right">
            <Commontitlebutton Text={"Why Choose us"} />
            <h1>Let's make something awesome together</h1>
            <p>
              We are not just another agency - we are your digital growth
              partners. With years of industry experience and a passion for
              innovation, our team is dedicated to delivering measurable results
              propel your business forward.
            </p>
            <div className="whychooseus-grd-item-right-flx">
              <div>
                <h6>Analytics Reporting</h6>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user
                </p>
              </div>
              <div>
                <h6>Data Guard Sentinel</h6>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user
                </p>
              </div>
            </div>
            <div className="whychooseus-button">
              <CommonButton
                text="EXPLORE MORE"
                icon={<Arrowrighticon />}
                to="/contact"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="whychoose-marketing-section-main">
        <div className="container">
          <div className="whychoose-marketing-box">
            <div className="whychoose-marketing-box-content">
              <Commontitlebuttonsecond Text="Free Marketing" />
            </div>
            <div className="whychoose-marketing-box-input"></div>
            <div className="whychoose-marketing-box-image">
              <img src={ctamarketing} alt="ctamarketing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
