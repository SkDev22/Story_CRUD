const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

//Connect the server
const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(cors());

//DB Connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

//Routes
const postRoutes = require("./routes/postRoutes.js");

app.use("/posts", postRoutes);

//Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
