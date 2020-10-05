import React, { useState, useContext } from "react";
import ReadDisplay from "../readDisplay/readDisplay";
import LikeButton from "../likeButton/likeButton";
import DiscussionButton from "../discussionButton/discussionButton";
import DiscussionInterface from "../discussionInterface/discussionInterface";
import { AuthContext } from "../contexts/authProvider";
import { Link } from "react-router-dom";

const ReadPublication = (props) => {
  const [commentsToggle, setCommentsToggle] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const publication = props.location.publication;
  console.log("this should be the publication", publication);

  const commentsToggleFunction = () => {
    if (commentsToggle) {
      return (
        <DiscussionInterface
          discussion={publication.discussion}
          publicationId={publication.publicationId}
        />
      );
    }
  };

  const userInteractionButtonsToggle = () => {
    if (!!currentUser) {
      return (
        <div className="py-4 px-4 w-full bg-black border-6 border-gray-800">
          <LikeButton
            publicationId={publication.publicationId}
            likes={publication.likes}
          />
          <DiscussionButton setCommentsToggle={setCommentsToggle} />
        </div>
      );
    }
  };

  return (
    <div className="mx-4 my-6 bg-gray-800 text-white">
      <div className="p-4 bg-black border-4 border-gray-800">
        <div className="w-full">
          <Link to="/stacks">
            <img
              className="h-8 float-right cursor-pointer"
              src="/images/cancel-button.png"
              alt="cancel button"
            />
          </Link>
        </div>
        <div className="flex">
          <h1 className="text-2xl italic">{publication.title}</h1>
          <h2 className="text-2xl px-10">{publication.author}</h2>
          <h2 className="text-2xl px-10">{publication.category}</h2>
        </div>
      </div>
      <div className="m-5 p-4 bg-white">
        <ReadDisplay bookContents={publication.bookContents} />
      </div>
      {userInteractionButtonsToggle()}
      <div>{commentsToggleFunction()}</div>
    </div>
  );
};

export default ReadPublication;
