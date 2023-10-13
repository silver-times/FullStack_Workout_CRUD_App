import express from "express";
import {getWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout} from "../controllers/workoutController";

const workoutRouter = express.Router();

workoutRouter.get('/', getWorkouts);

workoutRouter.get('/:id', getWorkout);

workoutRouter.post('/', createWorkout);

workoutRouter.put('/:id', updateWorkout);

workoutRouter.delete('/:id', deleteWorkout);

export default workoutRouter;