import dotenv from "dotenv";
import data from "./data";
import userRoute from "./Route/Route";
const bodyParser = require("body-parser");
import productRoute from "./Route/productRoute";
const mongoose = require("mongoose");
const express = require("express");
dotenv.config();

const mongodbURL = process.env.MONGODB_URL;
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
