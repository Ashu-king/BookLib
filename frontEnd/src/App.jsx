import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBOOK from "./pages/ShowBOOK";
import Edit from "./pages/Edit";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBOOK />} />
      <Route path="/books/edit/:id" element={<Edit />} />
      <Route path="/books/deleteBook/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
