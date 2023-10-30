import React, { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { set } from "mongoose";

const DeleteBook = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    setloading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
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
      <h1 className="text-3xl my-4">Delete Your Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-900 items-center w-[600px] p-4 mx-auto">
        <h3 className="text-2xl"> Are you sure?</h3>
        <button
          className="p-2 bg-red-600 m-8 text-white w-full"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
