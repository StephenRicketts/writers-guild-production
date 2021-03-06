import React, { useState, useEffect } from "react";
import firebaseDB from "../firebase/firebase";

const CommentDisplay = (props) => {
  const [discussion, setDiscussion] = useState([]);
  const db = firebaseDB.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection("publications")
      .where("publicationId", "==", props.publicationId)
      .onSnapshot((snapshot) => {
        let publication = snapshot.docs[0].data();
        console.log("this should be the snapshot", publication);
        let discussion = publication.discussion;
        console.log("this should be publication.discussion", discussion);
        setDiscussion(discussion);
        console.log("this should be the state comments", discussion);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6 w-4/5 bg-black border-4 border-gray-700 transparent">
      <ul>
        {discussion.map((comment) => {
          return (
            <li className="flex p-1 my-2 bg-gray-800">
              <div className="my-1 p-1 text-center font-bold bg-gray-700">
                <img
                  className="h-20 p-2 mx-auto"
                  src={comment.commenterPhotoURL}
                  alt="commenter profile"
                />
                <h1 className="p-2">{comment.commenterDisplayName}</h1>{" "}
              </div>
              <p className="p-2 pt-6 ">{comment.contents}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentDisplay;
