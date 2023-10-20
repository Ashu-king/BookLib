import express, { response } from "express";
import { PORT, MongoDB } from "./config.js";
import mongoose from "mongoose";
import { error } from "console";
import { Book } from "./models/bookModel.js";
const app = express();
app.use(express.json());
app.get("/", (req, respo) => {
  console.log(req);
  return respo.status(200).send("Welcom Ashu Jha, Let build You first Project");
});

app.post("/books", async (request, response) => {
  try {
    if (!request.body.t || !request.body.A || !request.body.P) {
      return response.status(400).send({
        message: "Send all req fields: title,Author, Published Date",
      });
    }
    const NewBook = {
      t: request.body.t,
      A: request.body.A,
      P: request.body.P,
    };
    const book = await Book.create(NewBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
mongoose
  .connect(MongoDB)
  .then(() => {
    console.log("Database Is connected");
    app.listen(PORT, () => {
      console.log("APP is Working");
    });
  })
  .catch((error) => {
    console.log(error);
  });
