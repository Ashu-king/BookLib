import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/Home/BooksCard";
import BooksTable from "../components/Home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5555/books").then((response) => {
      setBooks(response.data.books);
      setLoading(false);
    });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-green-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Card
        </button>
        <button
          className="bg-sky-300 hover:bg-pink-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Table
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Book list</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksCard books={books} />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
};

export default Home;
