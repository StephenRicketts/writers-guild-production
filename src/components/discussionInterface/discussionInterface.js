import React, { useState } from "react";
import firebaseDB from "firebase";
import CommentDisplay from "../commentDisplay/commentDisplay";

const DiscussionInterface = (props) => {
  const [comment, setComment] = useState("");
  const user = firebaseDB.auth().currentUser;
  const db = firebaseDB.firestore();

  const commentHandler = (evt) => {
    evt.preventDefault();
    console.log("comment handler hit");
    console.log("this is the user displayName, ", user.displayName);
    const addedComment = {
      commenterId: user.uid,
      contents: comment,
      commenterDisplayName: user.displayName,
      commenterPhotoURL: user.photoURL,
    };
    return db
      .collection("publications")
      .doc(props.publicationId)
      .update({ discussion: [...props.discussion, addedComment] })
      .then(() => {
        setComment("");
      })
      .catch((err) => {
        console.log("the following error has occured: ", err);
      });
  };

  return (
    <div className="flex font-mono">
      <form className="p-6 w-2/6 text-center bg-black border-4 border-gray-700">
        <label className="p-6 text-xl mx-auto font-bold">
          Add to the discussion:{" "}
        </label>
        <br />
        <textarea
          className="w-4/5 h-32 text-black"
          onChange={(evt) => {
            setComment(evt.target.value);
          }}
        />
        <br />
        <button
          onClick={commentHandler}
          className="py-2 px-4 mt-4 bg-purple-700 hover:bg-purple-300 font-mono text-white font-bold text-xl border border-yellow-700 rounded-full"
        >
          Post a Comment
        </button>
      </form>
      <CommentDisplay
        discussion={props.discussion}
        publicationId={props.publicationId}
      />
    </div>
  );
};

export default DiscussionInterface;
