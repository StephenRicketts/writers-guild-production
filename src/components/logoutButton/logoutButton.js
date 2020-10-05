import React, { useState } from "react";
import firebaseDB from "../firebase/firebase";
import { Redirect } from "react-router-dom";

const LogoutButton = () => {
  const [redirect, setRedirect] = useState(false);

  const logoutHandler = () => {
    firebaseDB
      .auth()
      .signOut()
      .then(() => {
        alert("You have logged out");
        setRedirect(true);
      })
      .catch((error) => {
        console.log("the following error has occured", error);
        alert("the following error has occured");
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <button
      onClick={logoutHandler}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
    >
      log out
    </button>
  );
};

export default LogoutButton;
