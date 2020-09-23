import React from "react";

const DiscussionButton = (props) => {
  return (
    <button
      className="mx-6 text-black bg-gray-200 border-solid border-4 border-gray-600 shadow-2xl"
      onClick={() => props.setCommentsToggle(true)}
    >
      <img
        className="h-8  mx-8 my-1"
        src="/icons/discussion.png"
        alt="discussion icon"
      />
      <h3>Discussion</h3>
    </button>
  );
};

export default DiscussionButton;
