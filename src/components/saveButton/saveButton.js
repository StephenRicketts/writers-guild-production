import React, { useState } from "react";
import firebaseDB from "firebase";
import { Redirect } from "react-router-dom";

const SaveButton = (props) => {
  const [redirect, setRedirect] = useState(false);
  var userId = firebaseDB.auth().currentUser.uid;
  const uuid = () => {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  };

  const publishHandler = () => {
    const db = firebaseDB.firestore();
    const publicationId = uuid();

    if (props.category === null) {
      alert("Please select a category.");
    } else {
      db.collection("publications")
        .doc(publicationId)
        .set({
          title: props.title,
          author: props.author,
          bookContents: props.bookContents,
          category: props.category,
          published: false,
          authorId: userId,
          likes: [],
          discussion: [],
          reads: 0,
          publicationId: publicationId,
        })
        .then(() => {
          alert("Your work has been added to your bookshelf");
          setRedirect(true);
        })
        .catch((error) => {
          console.log("there has been an error", error);
          alert("error occured during publishing");
        });
    }
  };

  if (redirect) {
    return <Redirect to="/userProfile" />;
  }
  return (
    <button
      className="py-3 px-8 my-10 bg-purple-700 hover:bg-purple-500 text-white border border-yellow-700 font-bold rounded-full font-mono"
      onClick={publishHandler}
    >
      Save
    </button>
  );
};

export default SaveButton;
