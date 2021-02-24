import React, { useState, useEffect } from "react";
import firebaseDB from "../firebase/firebase";
import { Link } from "react-router-dom";
import categoryColor from "../reducers/categoryColor";

const TheStacks = () => {
  const [publications, setPublications] = useState([]);

  const db = firebaseDB.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection("publications")
      .where("published", "==", true)
      .onSnapshot((snapshot) => {
        const newPublications = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPublications(newPublications);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="py-10  text-center font-mono">
        <span className="text-2xl">
          The only thing that you absolutely have to know, is the location of
          the library.
          <br /> <span className="text-xl">-Albert Einstein</span>
        </span>
      </div>
      <div
        style={{ minHeight: "750px" }}
        className="m-2 mb-10 bg-black rounded-md"
      >
        <span className="px-4 py-2 text-white w-full text-2xl">THE STACKS</span>
        <br />
        <span className="px-4 text-white w-full">
          Click on one of the publications below to read.
        </span>
        <ul className="py-4 mx-2 bg-black">
          {publications.map((publication) => {
            {
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
                  <li
                    key={publication.publicationId}
                    style={categoryColor(publication.category)}
                    className="p-4 m-3 text-white text-xl cursor-pointer border-4 border-double border-blue-4 font-mono overflow-hidden"
                  >
                    <div className="w-full grid grid-cols-6 whitespace-no-wrap">
                      <h1 className="col-span-2 italic inline-block ">
                        {publication.title}
                      </h1>
                      <div className="m-1 inline-block whitespace-no-wrap">
                        <h1 className="">By: {publication.author}</h1>
                      </div>
                      <div className="col-start-5">{publication.category}</div>
                      <div className="flex col-start-6">
                        <img src="/icons/like.png" className="h-6" />
                        <p className="px-2">{publication.likes.length}</p>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
export default TheStacks;
