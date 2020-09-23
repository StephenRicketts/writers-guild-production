import React from "react";

const GenreDropDown = (props) => {
  const toggleDropDown = (evt) => {
    if (props.genreDropDownToggle) {
      return (
        <ul className="flex flex-col">
          <button
            className="px-16 py-2 hover:bg-purple-300"
            onClick={(evt) => {
              props.setCategory("Short Fiction");
              props.setGenreDropDownToggle(false);
            }}
          >
            Short Fiction
          </button>
          <button
            className="px-4 py-2 hover:bg-purple-300"
            onClick={(evt) => {
              props.setCategory("Poetry");
              props.setGenreDropDownToggle(false);
            }}
          >
            Poetry
          </button>
          <button
            className="px-4 py-2 hover:bg-purple-300"
            onClick={(evt) => {
              props.setCategory("Screen Play");
              props.setGenreDropDownToggle(false);
            }}
          >
            Screen Play
          </button>
          <button
            className="px-4 py-2 hover:bg-purple-300"
            onClick={(evt) => {
              props.setCategory("Essay");
              props.setGenreDropDownToggle(false);
            }}
          >
            Essay
          </button>
        </ul>
      );
    }
  };
  return (
    <div className="">
      <button
        className="py-2 px-4 bg-purple-700 focus:outline-none hover:bg-purple-500 font-mono text-white font-bold border border-yellow-700 rounded-full"
        type="button"
        onClick={(evt) =>
          props.setGenreDropDownToggle(!props.genreDropDownToggle)
        }
      >
        Select Category ▾
      </button>
      <div className="absolute bg-white text-base rounded-lg shadow-xl">
        {toggleDropDown()}
      </div>
    </div>
  );
};

export default GenreDropDown;
