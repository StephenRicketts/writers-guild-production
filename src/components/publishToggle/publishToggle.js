import React from "react";
import firebaseDB from "../firebase/firebase";

const PublishToggle = (props) => {
  const db = firebaseDB.firestore();

  const textToggle = () => {
    return props.published ? "published" : "not published";
  };
  const functionToggle = () => {
    return props.published ? unpublish : publish;
  };

  const publish = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("publish function hit");
    db.collection("publications")
      .doc(props.publicationId)
      .update({
        published: true,
      })
      .then(function () {
        console.log("Your work has been added to the stacks");
        alert("Your work has been added to the stacks");
      });
  };
  const unpublish = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("unpublish function hit");
    db.collection("publications")
      .doc(props.publicationId)
      .update({
        published: false,
      })
      .then(function () {
        console.log("Your work has been removed from the stacks");
        alert("Your work has been removed from the stacks");
      });
  };

  return (
    <button
      className="mr-4 h-10 w-20 text-sm m-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      onClick={functionToggle()}
    >
      {textToggle()}
    </button>
  );
};

export default PublishToggle;
