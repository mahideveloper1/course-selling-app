const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();
app.use(
  cors({
    origin: ["https://course-app-pink.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose
  .connect("mongodb+srv://mahesh:4321dcba@cluster0.fgxlmxt.mongodb.net", {
    dbName: "cluster0",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.json("server is running successfully");
});

app.listen(3000, () => console.log("Server running on port 3000"));
