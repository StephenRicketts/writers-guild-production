import React, { useState, useContext } from "react";
import firebaseDB from "../firebase/firebase";
import LoginDropDown from "../loginDropDown/loginDropDown";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authProvider";

const SignInSignOutButton = (props) => {
  const [loginToggle, setLoginToggle] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const loginDropDownToggle = () => {
    if (loginToggle) {
      return <LoginDropDown setAuthorId={props.setAuthorId} />;
    }
  };
  const { currentUser } = useContext(AuthContext);

  const textToggle = () => {
    return !!currentUser ? "Log Out" : "Log In";
  };

  const onClickToggle = () => {
    !!currentUser
      ? firebaseDB
          .auth()
          .signOut()
          .then(() => {
            alert("You have logged out");
            setRedirect(true);
          })
          .catch((error) => {
            console.log("the following error has occured", error);
            alert("the following error has occured");
          })
      : setLoginToggle(!loginToggle);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button
        onClick={() => onClickToggle()}
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      >
        {textToggle()}
      </button>
      {loginDropDownToggle()}
    </div>
  );
};

export default SignInSignOutButton;
