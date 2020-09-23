import React, { useState } from "react";
import firebaseDB from "firebase";

const LikeButton = (props) => {
  const db = firebaseDB.firestore();
  const user = firebaseDB.auth().currentUser;
  const likesArray = props.likes;
  const [likedToggle, setLikedToggle] = useState(likesArray.includes(user.uid));

  console.log("this should be the liked toggle, ", likedToggle);

  const styleToggle = () => {
    return likedToggle
      ? { backgroundColor: "DarkOrchid" }
      : { backgroundColor: "LightGrey" };
  };

  const likeOrDislikeHandler = () => {
    return !likedToggle ? likeHandler : dislikeHandler;
  };

  const likeHandler = () => {
    const updatedLikesArray = [...likesArray, user.uid];
    return db
      .collection("publications")
      .doc(props.publicationId)
      .update({ likes: updatedLikesArray })
      .then(() => {
        setLikedToggle(true);
      })
      .catch((err) => {
        console.log("the following error has occured: ", err);
      });
  };
  const dislikeHandler = () => {
    console.log("this is a dislike hit");
    const updatedLikesArray = likesArray.filter((like) => like !== user.uid);
    console.log("this should be the updated array", updatedLikesArray);
    return db
      .collection("publications")
      .doc(props.publicationId)
      .update({ likes: updatedLikesArray })
      .then(() => {
        setLikedToggle(false);
      })
      .catch((err) => {
        console.log("the following error has occured: ", err);
      });
  };

  return (
    <button
      style={styleToggle()}
      className="border-solid border-4 border-gray-600 shadow-2xl text-black"
      onClick={likeOrDislikeHandler()}
    >
      <img className="h-6 mx-8 my-2" src="/icons/like.png" alt="like icon" />
      <h3>Endorse</h3>
    </button>
  );
};

export default LikeButton;
