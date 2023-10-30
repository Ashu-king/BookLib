import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
  return (
    <div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((item) => (
          <div
            key={item._id}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
          >
            <h2 className="abslote top-1 right-2 px-4 py-1 bg-red-300 rounded-lg  text-center">
              Published On : {item.Published_Year}
            </h2>
            <h3 className="my-2 text-gray-500 text-center font-semibold">
              Id: {item._id}
            </h3>
            <div className="flex justify-start items-center gap-x-2">
              <Link to={`/books/details/${item._id}`}>
                {" "}
                <img src={item.Image} alt="" width={"100px"} />
              </Link>
            </div>
            <div className="flex   gap-x-3 mt-4">
              <PiBookOpenTextLight className="text-red-300 text-2xl" />
              <h2 className="my-1"> {item.title}</h2>
            </div>

            <div className="flex  mt-4 gap-x-3 ">
              <BiUserCircle className="text-red-300 text-2xl" />
              <h2 className="my-1"> {item.Author}</h2>
            </div>
            <div className="flex justify-center items-center gap-x-16 mt-5 p-2">
              <Link to={`/books/details/${item._id}`}>
                <BsInfoCircle className=" text-2xl text-green-800 hover:text-black" />
              </Link>
              <Link to={`/books/edit/${item._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
              </Link>
              <Link to={`/books/deleteBook/${item._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
