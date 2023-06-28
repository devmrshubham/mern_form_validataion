const express = require("express");
const mongoose = require("mongoose");
const BlogRouter = require("./router/Blog.js");
const UserRouter = require("./router/User");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
const PORT = 5000;



app.use("/blog", BlogRouter);
app.use("/user", UserRouter);

mongoose
  .connect(
    "mongodb+srv://shubhamdewangan:1997@cluster0.dhzvpk4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("haa connected");
    app.listen(PORT, () => {
      console.log(`this server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database not Connected");
  });
