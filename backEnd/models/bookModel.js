import mongoose from "mongoose";
const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    Published_Year: {
      type: Number,
      required: true,
    },
    Image: {
      type: String,
      requried: true,
    },
    synopsis: {
      type: String,
      requried: true,
    },
  },
  {
    timestapms: true,
  }
);

export const Book = mongoose.model("cat", BookSchema);
