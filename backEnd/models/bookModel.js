import mongoose from "mongoose";
const BookSchema = mongoose.Schema(
  {
    t: {
      type: String,
      required: true,
    },
    A: {
      type: String,
      required: true,
    },
    P: {
      type: Number,
      required: true,
    },
  },
  {
    timestapms: true,
  }
);

export const Book = mongoose.model("cat", BookSchema);
