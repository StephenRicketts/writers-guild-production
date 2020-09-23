import React from "react";
import firebaseDB from "firebase";

const EditBookContentsButton = (props) => {
  const editBookContentsHandler = () => {
    console.log("editBookContents hander hit");
    console.log(
      "this should be the book contents in prop form",
      props.bookContents
    );
    const db = firebaseDB.firestore();
    db.collection("publications")
      .doc(props.publicationId)
      .update({
        bookContents: props.bookContents,
      })
      .then((bookContents) => {
        // console.log(
        //   "this should be the book contents, should be a string",
        //   bookContents
        // );
        // const contentsString = String(contentsString);
        // console.log(contentsString);
        // const contentsStringB = `${bookContents}`;
        // console.log(contentsStringB);
        // props.setBookContents(contentsStringB);
        alert("publication successfully updated");
      })
      .catch((error) => {
        console.log("there has been an error", error);
        alert("error occured during publishing");
      });
  };
  return (
    <button
      className="py-3 px-8 my-10 bg-purple-700 text-xl hover:bg-purple-500 text-white border border-yellow-700 font-bold rounded-full font-mono"
      onClick={editBookContentsHandler}
    >
      Save
    </button>
  );
};

export default EditBookContentsButton;
