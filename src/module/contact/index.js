import React from "react";
import Commonherobanner from "../../commoncomponents/commonherobanner";
import Breadcrumb from "../../commoncomponents/breadcrumb";
import Contactform from "../../components/contactcomponents/contactform";

export default function Contact() {
  return (
    <>
      <Commonherobanner
        Herobannertitle={"contact us"}
        CommonHerobannerBreadcrumb={
          <>
            <Breadcrumb
              Backlink={"home"}
              Backlinkurl={"/"}
              pagename={"contact us"}
            />
          </>
        }
      />
      <Contactform />
    </>
  );
}
