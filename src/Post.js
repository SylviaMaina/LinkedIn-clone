import React from "react";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post--header">
        <Avatar />
        <div className="post--info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post--body">
        <p>{message}</p>
      </div>
      <div className="post--buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="grey" />
        <InputOption
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="grey"
        />
        <InputOption Icon={ShareIcon} title="Share" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
}

export default Post;
