import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Spinner from "../components/spinner";

const ShowBOOK = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4 text-center">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 m-auto">
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">ID</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span>
              <img src={`${book.Image}`} alt="" width={"160px"} />
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-3 text-grey-500">Author:</span>
            <span>{book.Author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-3 text-grey-500">Published Year:</span>
            <span>{book.Published_Year}</span>
          </div>
          <div className="my-4 border-2 border-red-400 rounded-xl w-80 p-4 m-auto">
            <span className="text-xl mr-3 text-grey-500">Synopsis: </span>
            <span>{book.synopsis}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBOOK;
