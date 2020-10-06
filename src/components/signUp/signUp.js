import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseDB from "../firebase/firebase";

const SignUp = (props) => {
  const auth = firebaseDB.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const submitSignUpHandler = (evt) => {
    evt.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log(
          "this is the credentials, use this info to create a user collection in database to allow bios, etc",
          cred
        );
        props.setAuthorId(cred.user.uid);
        auth.currentUser.updateProfile({
          displayName: displayName,
        });
        alert("Sign up successful, welcome to writer's guild!");
      })
      .catch((error) => {
        console.log("the following error has occured", error);
        if (error.code === "auth/email-already-in-use") {
          alert(error.message);
        }
        return;
      });
    setRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to="/stacks" />;
  }

  return (
    <div>
      <div
        className="
        m-10
        border-2
        border-blue-700
        shadow-lg
        bg-gray-300
        text-center
        "
      >
        <h1 className="p-2 px-12 m-2 bg-purple-700 text-white text-4xl flex">
          Create an account
        </h1>
        <img
          src="/images/WGlogo.png"
          className="pt-10 m-auto"
          alt="Writer's Guild logo"
        />
        <p className="italic text-2xl pt-20">
          Word of your intellect precedes you and we are very glad to be in your
          company. May I show you to your writing quarters?
        </p>
        c
        <input
          placeholder="Email..."
          className="p-2 my-5 mt-20 w-10/12 text-3xl"
          name="email"
          type="email"
          minLength="5"
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          required
        />
        <br />
        <input
          placeholder="Password..."
          className="p-2 my-5 w-10/12 text-3xl"
          type="password"
          name="password"
          minLength="5"
          onChange={(evt) => {
            setPassword(evt.target.value);
            console.log("password state", password);
          }}
          required
        />
        <br />
        <input
          placeholder="Username..."
          className="p-2 my-5 w-10/12 text-3xl"
          type="text"
          name="DisplayName"
          minLength="5"
          onChange={(evt) => {
            setDisplayName(evt.target.value);
            console.log("password state", password);
          }}
          required
        />
        <br />
        <label>
          This will be visible on your profile, you can change it later.
        </label>
        <div className="pt-10 content-center">
          <input type="checkbox" id="checkbox" required />
          <label>
            I agree to the terms of service <br /> (this doesn't really exist
            yet just agree)
          </label>
        </div>
        <br />
        <button
          type="submit"
          className="px-5 py-2 mb-10 mt-10 text-white bg-purple-700 shadow-lg text-2xl cursor-pointer rounded-lg"
          onClick={submitSignUpHandler}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
