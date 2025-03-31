import React from "react";
import "./commonmarquee.scss";
import Marquee from "react-fast-marquee";
import star from "../../assets/images/star.png";

export default function Commonmarquee() {
  return (
    <>
      <div className="Commonmarquee-one">
        <Marquee pauseOnHover>
          <div className="Commonmarquee-one-main-flx">
            <div className="Commonmarquee-one-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-one-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-one-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-one-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-one-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="Commonmarquee-two">
        <Marquee pauseOnHover>
          <div className="Commonmarquee-two-main-flx">
            <div className="Commonmarquee-two-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-two-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-two-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-two-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
            <div className="Commonmarquee-two-flx">
              <img src={star} alt="star" />
              <h2>THE BEST SOULTION</h2>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}
