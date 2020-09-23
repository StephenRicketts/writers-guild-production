import React, { useState } from "react";
import firebaseDB from "../firebase/firebase";
import { Redirect } from "react-router-dom";

const LoginDropDown = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submitHandler = (evt) => {
    evt.preventDefault();
    const auth = firebaseDB.auth();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log("Auth function hit, this should be user info: ", cred.user);
        alert("Login successful, good to see you back!");
        props.setAuthorId(cred.user.uid);
      })
      .catch((error) => {
        console.log("the following error has occured", error);
        if (error.code === "auth/wrong-password") {
          alert("Password or Email incorrect, please try again");
          if (error.code === "auth/invalid-email") {
            alert("please enter a valid email address");
          }
        }
        return;
      });
    setRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to="/stacks" />;
  }

  return (
    <div className="p-5 absolute bg-gray-800 right-0 text-white">
      <label for="Email">Email</label>
      <input
        id="Email"
        autoComplete="off"
        className="p-2 m-2 text-black"
        type="email"
        onChange={(evt) => {
          setEmail(evt.target.value);
        }}
      />
      <label for="password">Password</label>
      <input
        id="password"
        autoComplete="off"
        className="p-2 m-2 text-black"
        type="password"
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />
      <button
        onClick={submitHandler}
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      >
        Submit
      </button>
    </div>
  );
};

export default LoginDropDown;
