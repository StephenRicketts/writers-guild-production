import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../logoutButton/logoutButton";
import { AuthContext } from "../contexts/authProvider";
import LoginButton from "../loginButton/loginButton";

const Header = (props) => {
  const { currentUser } = useContext(AuthContext);

  const signUpBannerToggle = () => {
    if (currentUser === null)
      return (
        <div className="p-4 w-full bg-purple-700 text-white">
          Please{" "}
          <Link to="/signup">
            <strong>sign up</strong>
          </Link>{" "}
          or log in to submit your work to the stacks!
        </div>
      );
  };

  const profileButtonToggle = () => {
    if (!!currentUser)
      return (
        <Link to="/userProfile">
          <button className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
            Profile
          </button>
        </Link>
      );
  };

  const writeButtonToggle = () => {
    if (!!currentUser)
      return (
        <Link to="/write">
          <button className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
            Write
          </button>
        </Link>
      );
  };

  const loginOrLogout = () => {
    if (!!currentUser) {
      return <LogoutButton />;
    } else {
      return <LoginButton setAuthorId={props.setAuthorId} />;
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <span className="font-semibold text-2xl tracking-tight font-mono">
              W.G.
            </span>
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/stacks">
              <button className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                Read
              </button>
            </Link>
            {writeButtonToggle()}
            {profileButtonToggle()}
          </div>
          {loginOrLogout()}
        </div>
      </nav>
      {signUpBannerToggle()}
    </div>
  );
};

export default Header;
