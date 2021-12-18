import React from "react";
import { Avatar } from "@mui/material";
import rainbow from "./rainbow.jpg";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar--recentitem">
      <span className="sidebar--hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar--top">
        <img src={rainbow} alt="" />
        <Avatar className="sidebar--avatar" />
        <h2>Sylvia Maina</h2>
        <h4>Sylviamaina16@gmail.com</h4>
      </div>
      <div className="sidebar--stats">
        <div className="sidebar--stat">
          <p>Who viewed you</p>
          <p className="sidebar--statnumber">2,543</p>
        </div>
        <div className="sidebar--stat">
          <p>Views on post</p>
          <p className="sidebar--statnumber">2,543</p>
        </div>
      </div>
      <div className="sidebar--bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengeneering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
export default Sidebar;
