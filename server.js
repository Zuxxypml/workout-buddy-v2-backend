//Creating Prerequisites
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRouter = require("./routes/workouts");
const userRouter = require("./routes/userRoute");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());

// Middleware
app.use(express.json());

//Routes
app.use("/api/workouts", workoutRouter);
app.use("/api/user", userRouter);

// Initiating Database Connection
async function run() {
  await mongoose.connect(process.env.MONGO_URI);
}
run()
  .then((d) => {
    console.log("Connected to DB");
    //Listener
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("Unable to connect to Database");
  });
