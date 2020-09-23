import React from "react";
import categoryTextColor from "../reducers/categoryTextColor";

const CategoryDisplay = (props) => {
  return (
    <h1
      className="text-3xl font-bold font-mono"
      style={categoryTextColor(props.category)}
    >
      {props.category}
    </h1>
  );
};

export default CategoryDisplay;
