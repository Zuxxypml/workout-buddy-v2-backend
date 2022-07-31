const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const auth = require("../middleware/authMiddleWare.js");
const workoutRouter = express.Router();

// Get and Post Workouts
workoutRouter.route("/").get(getWorkouts).post(auth, createWorkout);

// Gets a Workout  and Deletes a workout and Updates
workoutRouter
  .route("/:id")
  .get(getWorkout)
  .delete(deleteWorkout)
  .patch(updateWorkout);

module.exports = workoutRouter;
