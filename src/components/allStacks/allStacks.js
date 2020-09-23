import React, { useState, useEffect } from "react";
import firebaseDB from "firebase";
import { Link } from "react-router-dom";

const AllStacks = (props) => {
  const [publications, setPublications] = useState([]);

  const db = firebaseDB.firestore();

  useEffect(() => {
    const unsubscribe = db.collection("publications").onSnapshot((snapshot) => {
      const newPublications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPublications(newPublications);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-yellow-200 font-mono border-double border-8 border-yellow-700">
      <h1 className="m-1 px-2 bg-purple-700 text-4xl text-white">
        Recently Published
      </h1>
      <ul>
        {publications.map((publication) => {
          return (
            <Link
              to={{
                pathname: `/read/: ${publication.publicationId}`,
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
              <li className="p-4 m-3 bg-indigo-400 text-white text-xl cursor-pointer border-4 border-double border-blue-4">
                <div className="w-full grid grid-cols-6">
                  <h1 className="col-span-2 italic inline-block">
                    {publication.title}
                  </h1>
                  <div className=" inline-block">
                    <h1 className="">By: {publication.author}</h1>
                  </div>
                  <div className="col-start-5">{publication.category}</div>
                  <div className="flex col-start-6">
                    <img src="/icons/like.png" className="h-6" />
                    <p className="px-2">{publication.likes.length - 1}</p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default AllStacks;
