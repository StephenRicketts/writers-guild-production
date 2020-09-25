import React from "react";

const ReadDisplay = (props) => {
  return (
    <div
      className="text-black"
      dangerouslySetInnerHTML={{ __html: props.bookContents }}
    ></div>
  );
};

export default ReadDisplay;
