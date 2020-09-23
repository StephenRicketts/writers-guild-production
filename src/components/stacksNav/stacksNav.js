import React from "react";

const StacksNav = (props) => {
  return (
    <div className="w-1/5 pr-10 mt-6">
      <button className="py-3 px-8 w-full my-2 bg-purple-700 hover:bg-purple-500 shadow-2xl text-white border border-yellow-700 font-bold rounded-full font-mono">
        Short Fiction
      </button>
      <button className="py-3 px-8 w-full my-2 bg-purple-700 hover:bg-purple-500 shadow-2xl text-white border border-yellow-700 font-bold rounded-full font-mono">
        Essays
      </button>
      <button className="py-3 px-8 my-2 w-full bg-purple-700 hover:bg-purple-500 shadow-2xl text-white border border-yellow-700 font-bold rounded-full font-mono">
        Screen Play
      </button>
      <button className="py-3 px-8 my-2 w-full bg-purple-700 hover:bg-purple-500 shadow-2xl text-white border border-yellow-700 font-bold rounded-full font-mono">
        Poetry
      </button>
    </div>
  );
};

export default StacksNav;
