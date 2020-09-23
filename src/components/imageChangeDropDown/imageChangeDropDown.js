import React, { useState } from "react";
import firebaseDB from "../firebase/firebase";

const ImageChangeDropDown = (props) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const user = firebaseDB.auth().currentUser;

  const storage = firebaseDB.storage();
  const imageChangeHandler = (evt) => {
    if (evt.target.files[0]) {
      setImage(evt.target.files[0]);
    }
  };

  const handleImageUpload = (evt) => {
    evt.preventDefault();
    console.log("image upload handler hit");
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log("error uploading image", error);
      },
      () => {
        console.log("this appears to be a success");
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("this should be the URL", url);
            user
              .updateProfile({ photoURL: url })
              .then(console.log("User profile photo updated", user))
              .catch((error) => {
                console.log("error updating profile photo url", error);
              });
          });
        props.setImageDropDownToggle(false);
      }
    );
  };
  return (
    <div className="absolute p-6 text-white bg-gray-900 border-6 border-solid border-gray-700">
      <span className="py-2">Update Profile Photo</span>
      <br />
      <input
        className="py-2 my-auto"
        type="file"
        onChange={imageChangeHandler}
      />
      <br />
      <button
        onClick={handleImageUpload}
        className="my-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      >
        Upload Photo
      </button>
      <br />
      <progress className="my-2" value={progress} max="100" />
    </div>
  );
};

export default ImageChangeDropDown;
