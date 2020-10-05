import React, { useState } from "react";
import LoginDropDown from "../loginDropDown/loginDropDown";

const LoginButton = (props) => {
  const [loginDropDownToggle, setLoginDrogDownToggle] = useState(false);

  const dropDown = () => {
    if (loginDropDownToggle) {
      return <LoginDropDown setAuthorId={props.setAuthorId} />;
    }
  };

  return (
    <div>
      <button
        onClick={() => setLoginDrogDownToggle(!loginDropDownToggle)}
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      >
        login
      </button>
      {dropDown()}
    </div>
  );
};

export default LoginButton;
