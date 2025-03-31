import React from "react";
import "./marketingmarquee.scss";
import Marquee from "react-fast-marquee";
import hasicon from "../../assets/images/has.png";

export default function Marketingmarquee() {
  return (
    <div className="marketing-marquee-main">
      <Marquee pauseOnHover>
        <div className="marketing-marquee-flx-main">
          <div className="marketing-marquee-flx stroked-font">
            <img src={hasicon} alt="hasicon" />
            <h1>SEO Marketing</h1>
          </div>
          <div className="marketing-marquee-flx transparent-font">
            <img src={hasicon} alt="hasicon" />
            <h1>Email Marketingimg</h1>
          </div>
          <div className="marketing-marquee-flx stroked-font">
            <img src={hasicon} alt="hasicon" />
            <h1>Business Grow</h1>
          </div>
          <div className="marketing-marquee-flx transparent-font">
            <img src={hasicon} alt="hasicon" />
            <h1>Digital Marketing</h1>
          </div>
        </div>
      </Marquee>
    </div>
  );
}
