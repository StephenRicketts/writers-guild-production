import React from "react";

const ReadDisplay = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.bookContents }}></div>;
};

export default ReadDisplay;
