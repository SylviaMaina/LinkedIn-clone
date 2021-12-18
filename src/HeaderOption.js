import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, title, Icon }) {
  return (
    <div className="headeroption">
      {Icon && <Icon className="headeroption--icon" />}
      {avatar && <avatar className="headeroption--icon" src={avatar} />}
      <h3 className="headeroption--title">{title}</h3>
    </div>
  );
}
export default HeaderOption;
