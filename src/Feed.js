import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import db from "./firebase";
// import firebase from "firebase";

function Feed() {
  // useEffect(() => {
  //   onSnapshot(collection(db, "Posts"), (snapshot) => {
  //     console.log(snapshot.docs);
  //   });
  // });
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Posts"), (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(posts);
      }),

    []
  );

  //const sendPost = (e) => {
  //e.preventDefault();

  const sendPost = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "Posts");
    const payLoad = {
      name: "Sylvia Maina",
      description: "This is a test",
      message: input,
    };
    await addDoc(collectionRef, payLoad);

    console.log(payLoad);
  };
  //   collection(db, "Posts").add({
  //     name: "Sylvia Maina",
  //     description: "This is a test",
  //     message: input,
  //     //timestamp: firebase.firestore.fieldValue.serverTimestamp(),
  //   });
  // };

  return (
    <>
      <div className="feed">
        <div className="feed--inputcontainer">
          <div className="feed--input">
            <CreateIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed--inputoptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
          />
        ))}
      </div>
    </>
  );
}
export default Feed;
