import { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { set } from "mongoose";
import BackButtons from "../components/BackButtons";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Published_Year, setPublished_Year] = useState("");
  const [Image, setImage] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.Author);
        setPublished_Year(response.data.Published_Year);
        setImage(response.data.image);
        setloading(false);
      })
      .catch((error) => alert(error));
  }, []);
  const handleEditBook = () => {
    const data = {
      title,
      Author,
      Published_Year,
      Image,
      synopsis,
    };
    setloading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
        setloading(false);
      });
  };
  return (
    <div className="p4">
      <h1 className="text-3xl my-4">Edit Your Book</h1>
      <BackButtons />
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Author:</label>
          <input
            type="text"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Published Year:</label>
          <input
            type="Number"
            value={Published_Year}
            onChange={(e) => setPublished_Year(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Cover Link:</label>
          <input
            type="text"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Synopsis: </label>
          <textarea
            type="text"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full h-60"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Edit;
