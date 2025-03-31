import React from "react";
import "./commonherobanner.scss";
import Herobannerleftshape from "../../assets/images/herobannerleftshape.png";
import Herobannerrightshape from "../../assets/images/herobannerrightshape.png";

export default function Commonherobanner({
  Herobannertitle,
  CommonHerobannerBreadcrumb,
}) {
  return (
    <div className="commonherobanner-main">
      {/* <div className="container"> */}
      <div className="commonherobanner">
        <div className="commonherobanner-side-image-one">
          <img src={Herobannerleftshape} alt="Herobannerleftshape" />
        </div>
        <div className="commonherobanner-middle-content">
          <div className="commonherobanner-middle-content-flx">
            <h1>{Herobannertitle}</h1>
            <div className="commonherobanner-middle-content-breadcrumb">
              {CommonHerobannerBreadcrumb}
            </div>
          </div>
        </div>
        <div className="commonherobanner-side-image-two">
          <img src={Herobannerrightshape} alt="Herobannerrightshape" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
