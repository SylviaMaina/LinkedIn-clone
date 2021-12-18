import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgetsArticle">
      <div className="widgetsArticleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgetsArticleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgetsHeader">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Sylvia needs to learn Redux", "Top news - 983 readers")}
      {newsArticle(
        "Sylvia needs to learn alot of things",
        "Top news - 657 readers"
      )}
      {newsArticle("Sylvia needs to learn firebase", "Top news - 657 readers")}
      {newsArticle(
        "Covid has a variant called omicron",
        "Top news - 657 readers"
      )}
      {newsArticle(
        "Create projects on your own to help you learn React",
        "Top news - 657 readers"
      )}
      {newsArticle(
        "The flu has caught most people in Nairobi",
        "Top news - 657 readers"
      )}
      {newsArticle(
        "To get the vaccine or not that is the question!",
        "Top news - 657 readers"
      )}
    </div>
  );
}

export default Widgets;
