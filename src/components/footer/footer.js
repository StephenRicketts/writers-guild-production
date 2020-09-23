import React, { useState } from "react";

const Footer = (props) => {
  const [showEmailToggle, setShowEmailToggle] = useState(false);
  const showEmail = () => {
    if (showEmailToggle) {
      return <div>Email: writersguild20@gmail.com</div>;
    }
  };
  return (
    <footer className="w-full text-center py-10 bottom-0 bg-gray-800 text-white text-xl">
      <ul>
        <li
          className="py-5 px-64 cursor-pointer"
          onClick={() => setShowEmailToggle(!showEmailToggle)}
        >
          Contact Us
        </li>
        {showEmail()}
        <li className="py-5 px-64 cursor-pointer">Terms and conditions</li>
        <li className="py-5 px-64 cursor-pointer">privacy</li>
      </ul>
      <hr />
      <p className="py-2 text-center text-white">
        &copy;{new Date().getFullYear()} WRITER'S GUILD | All rights reserved |
        Terms of service{" "}
      </p>
    </footer>
  );
};
export default Footer;
