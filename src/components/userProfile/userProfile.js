import React, { useState } from "react";
import firebaseDB from "../firebase/firebase";
import ImageChangeDropDown from "../imageChangeDropDown/imageChangeDropDown";
import DisplayNameChangeDropDown from "../displayNameChangeDropDown/displayNameChangeDropDown";
import BookShelf from "../bookShelf/bookShelf";

const UserProfile = () => {
  const [imageDropDownToggle, setImageDropDownToggle] = useState(false);
  const [
    displayNameChangeDropDownToggle,
    setDisplayNameChangeDropDownToggle,
  ] = useState(false);

  const user = firebaseDB.auth().currentUser;

  const imageChangeDropDown = () => {
    if (imageDropDownToggle) {
      return (
        <ImageChangeDropDown setImageDropDownToggle={setImageDropDownToggle} />
      );
    }
  };

  const displayNameChangeDropDown = () => {
    if (displayNameChangeDropDownToggle) {
      return (
        <DisplayNameChangeDropDown
          setDisplayNameChangeDropDownToggle={
            setDisplayNameChangeDropDownToggle
          }
        />
      );
    }
  };

  const defaultProfilePic = () => {
    return !!user.photoURL ? user.photoURL : "images/defaultProfilePic.png";
  };

  const minWidthStyle = {
    minWidth: "1000px",
  };

  return (
    <div>
      <div className="py-10  text-center font-mono">
        <span className="text-2xl">
          Talent is cheaper than table salt.
          <br /> What separates the talented individual from the successful one
          is a lot of hard work.
          <br /> <span className="text-xl">-Stephen King</span>
        </span>
      </div>
      <div
        style={minWidthStyle}
        className="mx-2 mt-6 mb-32 p-6 bg-black rounded-md"
      >
        <span>Your Profile.</span>
        <div>
          <img
            className="h-32 w-32 rounded-full border-solid border-4 border-gray-700 cursor-pointer hover:border-white"
            src={defaultProfilePic()}
            onClick={() => setImageDropDownToggle(!imageDropDownToggle)}
          />
          {imageChangeDropDown()}
          <div className="flex">
            <h1 className="text-white p-4">{user.displayName}</h1>{" "}
            <img
              src="icons/editIcon.png"
              className="h-6 mx-4 my-auto inline cursor-pointer"
              onClick={() =>
                setDisplayNameChangeDropDownToggle(
                  !displayNameChangeDropDownToggle
                )
              }
            />
          </div>
          {displayNameChangeDropDown()}
        </div>
        <div>
          <BookShelf />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
