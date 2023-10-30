import React, { useState } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { set } from "mongoose";
import BackButtons from "../components/BackButtons";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Published_Year, setPublished_Year] = useState("");
  const [Image, setImage] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBookk = () => {
    const data = {
      title,
      Author,
      Published_Year,
      Image,
      synopsis,
    };
    setloading(true);
    axios
      .post("http://localhost:5555/books", data)
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
      <h1 className="text-3xl my-4">Create Your Book</h1>

      {loading ? <Spinner /> : ""}
      <BackButtons />
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Author</label>
          <input
            type="text"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Published Year</label>
          <input
            type="Number"
            value={Published_Year}
            onChange={(e) => setPublished_Year(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-green-500">Cover Link</label>
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
            type="pa"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            className="border-2 border-grey-500 px-4 w-full h-40 rounded-lg "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBookk}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
