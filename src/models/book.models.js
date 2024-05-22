import mongoose from "mongoose";

const BookShema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    publication_date: String,
  }
)

export default mongoose.model('Book', BookShema);