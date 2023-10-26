import express, { response } from "express";
import { PORT, MongoDB } from "./config.js";
import mongoose, { model } from "mongoose";
import { error } from "console";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.get("/", (req, respo) => {
  console.log(req);
  return respo.status(200).send("Welcom Ashu Jha, Let build You first Project");
});
app.use("/books", booksRoute);
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
