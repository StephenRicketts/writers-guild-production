import React, { useState, useRef, useMemo } from "react";
import SaveButton from "../saveButton/saveButton";
import TextEditor from "../textEditor/textEditor";
import GenreDropDown from "../genreDropDown/genreDropDown";
import CategoryDisplay from "../categoryDisplay/categoryDisplay";

const NewPublicationInterface = (props) => {
  const [bookContents, setBookContents] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genreDropDownToggle, setGenreDropDownToggle] = useState(false);
  const [category, setCategory] = useState(null);

  return (
    <div>
      <div className="py-10  text-center font-mono">
        <span className="text-2xl">
          A word after a word after a word is power.
          <br /> <span className="text-xl">-Margaret Atwood</span>
        </span>
      </div>

      <div className="mx-2 my-6 p-4 bg-black rounded-md">
        <span className="text-white text-2xl font-mono">WRITE.</span>
        <div>
          <div className="my-4">
            <GenreDropDown
              genreDropDownToggle={genreDropDownToggle}
              setGenreDropDownToggle={setGenreDropDownToggle}
              setCategory={setCategory}
            />
            <CategoryDisplay category={category} />
          </div>
          <input
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            placeholder="Title..."
            className="p-1 my-4"
          />
          <br />
          <input
            type="text"
            value={author}
            onChange={(evt) => setAuthor(evt.target.value)}
            placeholder="Author..."
            className="p-1 my-2 mb-6"
          />
          <TextEditor
            bookContents={bookContents}
            setBookContents={setBookContents}
          />
        </div>
        <div className="text-center">
          {" "}
          <div className="pt-10">
            <span className="text-white font-mono">
              Upon hitting this save button, your work will be added to your
              bookshelf which can be viewed on the "Profile" section.
              <br /> From your bookshelf you can continue to edit or publish
              your work.
            </span>
          </div>
          <SaveButton
            credentials={props.credentials}
            title={title}
            author={author}
            bookContents={bookContents}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPublicationInterface;
