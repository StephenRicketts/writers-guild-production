import React from "react";
import firebaseDB from "../firebase/firebase";

const EditTitleButton = (props) => {
  const titleUpdateHandler = () => {
    console.log("title update handler hit");
    const db = firebaseDB.firestore();
    db.collection("publications")
      .doc(props.publicationId)
      .update({
        title: props.titleUpdate,
      })
      .then((bookContents) => {
        props.setTitleUpdate(bookContents);
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
          props.setTitleUpdate(evt.target.value);
        }}
      />
      <button
        className="inline-block m-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
        onClick={titleUpdateHandler}
      >
        update
      </button>
    </div>
  );
};

export default EditTitleButton;
