import React from "react";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div className="font-mono">
      <img src="/images/WGlogo.png" className="h-64 mt-16 mx-auto" />
      <div className="p-16 text-center text-white font-bold">
        <span className="p-8 text-2xl ">
          Workshop your writing <br /> with the help of your peers <br /> and
          access unlimited content
          <br />
          from around the world.
        </span>
        <div>
          <Link to="/stacks">
            <button className="my-6 mx-auto bg-purple-600 hover:bg-purple-700 text-xl shadow-2xl text-white font-bold py-5 px-12 rounded-full">
              VIEW THE STACKS
            </button>
          </Link>
        </div>
        <Link to="/signup">
          <button className="my-6 mx-auto bg-purple-600 hover:bg-purple-700 text-xl shadow-2xl text-white font-bold py-5 px-12 rounded-full">
            CREATE AN ACCOUNT
          </button>
        </Link>
      </div>
      <div className="px-32 py-20 w-full bg-white text-black ">
        <h1 className="text-3xl m-auto font-extrabold">
          Get your work out there...
        </h1>
        <div className="flex text-xl space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12">
          <div className="flex">
            <ul className="p-2">
              <li>Receive Feedback</li>
              <li>Read your friends' work</li>
              <li>Unlimited original publications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
