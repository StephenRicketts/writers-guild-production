import React, { useState, useEffect } from "react";
import EditBookContentsButton from "../editPublicationButtons/editBookContentsbutton";
import TextEditor from "../textEditor/textEditor";
import EditTitleButton from "../editPublicationButtons/editTitleButton";
import EditAuthorButton from "../editPublicationButtons/editAuthorButton";
import categoryTextColor from "../reducers/categoryTextColor";
import DeleteButton from "../deleteButton/deleteButton";

const EditPublicationInterface = (props) => {
  const [bookContents, setBookContents] = useState("");
  const [authorUpdate, setAuthorUpdate] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [authorUpdateToggle, setAuthorUpdateToggle] = useState(false);
  const [titleUpdateToggle, setTitleUpdateToggle] = useState(false);
  const publication = props.location.publication;

  console.log("this should be the book contents", bookContents);

  const authorButtonToggle = () => {
    if (authorUpdateToggle) {
      return (
        <EditAuthorButton
          authorUpdate={authorUpdate}
          setAuthorUpdate={setAuthorUpdate}
          publicationId={publication.publicationId}
        />
      );
    }
  };

  const titleButtonToggle = () => {
    if (titleUpdateToggle) {
      return (
        <EditTitleButton
          titleUpdate={titleUpdate}
          setTitleUpdate={setTitleUpdate}
          publicationId={publication.publicationId}
        />
      );
    }
  };

  useEffect(() => {
    setBookContents(publication.bookContents);
  }, []);

  return (
    <div>
      <div className="py-10  text-center font-mono">
        <span className="text-2xl">
          I do things like get in a taxi and say, "The library, and step on it."
          <br />{" "}
          <span className="text-xl">-David Foster Wallace, Infinite Jest</span>
        </span>
      </div>
      <div className="mx-2 my-6 p-4 bg-black  font-mono rounded-md">
        <span className="text-white text-3xl">EDIT.</span>
        <div>
          <div className="my-4">
            <h1
              style={categoryTextColor(publication.category)}
              className="text-3xl"
            >
              {publication.category}
            </h1>
          </div>
          <div>
            <div className="flex">
              <h1 className="text-white text-2xl">{publication.title}</h1>
              <img
                className="h-8 m-2 cursor-pointer"
                src="icons/editIcon.png"
                onClick={() => setTitleUpdateToggle(!titleUpdateToggle)}
              />
            </div>
            {titleButtonToggle()}
          </div>
          <br />
          <div>
            <div className="flex">
              <h1 className="text-white text-2xl">{publication.author}</h1>
              <img
                className="h-8 m-2 cursor-pointer"
                src="icons/editIcon.png"
                onClick={() => setAuthorUpdateToggle(!authorUpdateToggle)}
              />
            </div>
            {authorButtonToggle()}
            <span className="text-white p-2">
              * Save early and often as refreshing or navigating away from this
              page will delete any unsaved work.
            </span>
          </div>
          <TextEditor
            bookContents={bookContents}
            setBookContents={setBookContents}
          />
        </div>
        <div className="text-center">
          <EditBookContentsButton
            publicationId={publication.publicationId}
            bookContents={bookContents}
            setBookContents={setBookContents}
          />
          <DeleteButton publicationId={publication.publicationId} />
        </div>
      </div>
    </div>
  );
};

export default EditPublicationInterface;
