import React from "react";
import "./breadcrumb.scss";
import Rigtharrow from "../../assets/icons/rightarrow";
import { NavLink } from "react-router-dom";

export default function Breadcrumb({ Backlink, Backlinkurl, pagename }) {
  return (
    <>
      <div className="breadcrumb-main">
        <NavLink to={Backlinkurl}>{Backlink}</NavLink>
        <Rigtharrow />
        <span>{pagename}</span>
      </div>
    </>
  );
}
