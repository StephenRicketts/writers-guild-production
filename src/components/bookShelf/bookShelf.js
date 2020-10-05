import React, { useState, useEffect } from "react";
import firebaseDB from "../firebase/firebase";
import categoryColor from "../reducers/categoryColor";
import PublishToggle from "../publishToggle/publishToggle";
import { Link } from "react-router-dom";

const BookShelf = () => {
  const [bookShelfItems, setBookShelfItems] = useState([]);
  const user = firebaseDB.auth().currentUser;
  const db = firebaseDB.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection("publications")
      .where("authorId", "==", user.uid)
      .onSnapshot((snapshot) => {
        const userPublications = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookShelfItems(userPublications);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-black text-white text-2xl">
      <span>Your Bookshelf</span>
      <ul>
        {bookShelfItems.map((publication) => {
          return (
            <Link
              to={{
                pathname: "/edit",
                publication: {
                  bookContents: publication.bookContents,
                  author: publication.author,
                  title: publication.title,
                  category: publication.category,
                  publicationId: publication.publicationId,
                  likes: publication.likes,
                  discussion: publication.discussion,
                },
              }}
            >
              <li
                style={categoryColor(publication.category)}
                className="m-2 flex p-4 text-white text-xl cursor-pointer border-4 border-double border-blue-4"
                key={publication.publicationID}
              >
                <PublishToggle
                  publicationId={publication.publicationId}
                  published={publication.published}
                />
                <div className="flex-1 overflow-hidden">
                  {publication.title}
                </div>
                <div className="flex-1 overflow-hidden">
                  {publication.author}
                </div>
                <div className="flex-1 overflow-hidden">
                  {publication.category}
                </div>
                <div className="flex-1 flex overflow-hidden">
                  <img src="/icons/like.png" className="h-6" alt="like icon" />
                  <p className="px-2">{publication.likes.length}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="p-2 text-center">
        <span className="p-4 text-white font-mono">
          Welcome to your bookshelf. <br />
          Click on your publication to continue to edit
          <br />
          or hit the publish button to release it to the world.
        </span>
      </div>
    </div>
  );
};

export default BookShelf;
