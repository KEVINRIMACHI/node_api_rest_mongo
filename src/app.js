import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/book.routes.js";
import bodyParser from "body-parser";

env.config();

const app = express();
app.use(bodyParser.json());

//connection to data base
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

//routes
app.use('/books', routes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
