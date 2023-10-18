import express from "express";
import {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController";
import { auth } from "../middlewares/auth";

const workoutRouter = express.Router();

workoutRouter.get("/", auth, getWorkouts);

workoutRouter.get("/:id", auth, getWorkout);

workoutRouter.post("/", auth, createWorkout);

workoutRouter.put("/:id", auth, updateWorkout);

workoutRouter.delete("/:id", auth, deleteWorkout);

export default workoutRouter;
