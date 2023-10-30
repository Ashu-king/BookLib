import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.Author ||
      !request.body.Published_Year ||
      !request.body.Image ||
      !request.body.synopsis
    ) {
      return response.status(400).send({
        message:
          "Send all req fields: title,Author, Published Date and image with synopsis",
      });
    }
    const NewBook = {
      title: request.body.title,
      Author: request.body.Author,
      Published_Year: request.body.Published_Year,
      Image: request.body.Image,
      synopsis: request.body.synopsis,
    };
    const book = await Book.create(NewBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//Route for get all the books frm database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({ books });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});
router.get("/:id", async (req, response) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return response.status(200).json({ book });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.Author ||
      !request.body.Published_Year
    ) {
      return response.status(404).send({ message: "send all req details" });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "book not found" });
    }
    return response.status(200).send({ message: "Book is updated" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "book not found" });
    }
    return response.status(200).send({ message: "Book is delete" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

export default router;
