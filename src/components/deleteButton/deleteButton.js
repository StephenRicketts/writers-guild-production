import React, { useState } from "react";
import firebaseDB from "../firebase/firebase";
import { Redirect } from "react-router-dom";

const DeleteButton = (props) => {
  const [deleteButtonDropDownToggle, setDeleteButtonDropDownToggle] = useState(
    false
  );
  const [deleteVerifyInput, setDeleteVerifyInput] = useState("");
  const [redirect, setRedirect] = useState(false);

  const deleteHandler = () => {
    const db = firebaseDB.firestore();
    if (deleteVerifyInput === "delete") {
      db.collection("publications")
        .doc(props.publicationId)
        .delete()
        .then(function () {
          alert("Publication successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
      setRedirect(true);
    } else {
      alert("please enter delete into input to verify deletion");
    }
  };

  const deleteButtonDropDown = () => {
    if (deleteButtonDropDownToggle) {
      return (
        <div className="text-center">
          <label className="m-2 text-white font-mono" for="delete">
            {" "}
            Please type delete into this input and hit Accept if you are sure
            you want to delete you work.
            <br />
            <strong>This cannot be reversed.</strong>
          </label>
          <br />
          <input
            id="delete"
            type="text"
            onChange={(evt) => {
              setDeleteVerifyInput(evt.target.value);
            }}
          />
          <button
            className="inline-block m-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            onClick={deleteHandler}
          >
            Accept
          </button>
        </div>
      );
    }
  };

  if (redirect) {
    return <Redirect to="/userprofile" />;
  }

  return (
    <div>
      <button
        className="py-3 px-8 my-10 bg-purple-700 text-2xl hover:bg-purple-500 text-white border border-yellow-700 font-bold rounded-full font-mono"
        onClick={() => {
          setDeleteButtonDropDownToggle(!deleteButtonDropDownToggle);
        }}
      >
        Delete
      </button>
      {deleteButtonDropDown()}
    </div>
  );
};

export default DeleteButton;
