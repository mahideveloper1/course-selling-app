const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// mongoose.connect(
//   "mongodb+srv://mahesh:4321dcba@cluster0.fgxlmxt.mongodb.net/",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "cluster0",
//   }
// );

mongoose
  .connect(
    "mongodb+srv://mahesh:4321dcba@cluster0.fgxlmxt.mongodb.net", // added database name to connection string
    {
      dbName: "cluster0", // removed deprecated options
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
