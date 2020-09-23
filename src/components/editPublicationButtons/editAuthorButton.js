import React from "react";
import firebaseDB from "../firebase/firebase";

const EditAuthorButton = (props) => {
  const authorUpdateHandler = () => {
    console.log("author update handler hit");
    const db = firebaseDB.firestore();
    db.collection("publications")
      .doc(props.publicationId)
      .update({
        author: props.authorUpdate,
      })
      .then((bookContents) => {
        props.setAuthorUpdate(bookContents);
        alert("publication successfully updated");
      })
      .catch((error) => {
        console.log("there has been an error", error);
        alert("error occured during publishing");
      });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(evt) => {
          props.setAuthorUpdate(evt.target.value);
        }}
      />
      <button
        className="inline-block m-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
        onClick={authorUpdateHandler}
      >
        update
      </button>
    </div>
  );
};

export default EditAuthorButton;
