import React, { useState } from "react";
import firebaseDB from "../firebase/firebase";

const DisplayNameChangeDropDown = (props) => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const user = firebaseDB.auth().currentUser;

  const displayNameChangeHandler = () => {
    console.log("name change handler hit");
    user
      .updateProfile({
        displayName: newDisplayName,
      })
      .then(function () {
        props.setDisplayNameChangeDropDownToggle(false);
      })
      .catch(function (error) {
        console.log("there has been an error updating display name", error);
      });
  };

  return (
    <div>
      <input onChange={(evt) => setNewDisplayName(evt.target.value)} />
      <button
        onClick={displayNameChangeHandler}
        className="mx-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      >
        Save
      </button>
    </div>
  );
};

export default DisplayNameChangeDropDown;
