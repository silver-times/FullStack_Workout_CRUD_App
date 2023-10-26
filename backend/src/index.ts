import express from "express";
import cors from "cors";
import { KEYS } from "../config/keys";
import workoutRouter from "../routes/workout";
import userRouter from "../routes/user";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/workouts", workoutRouter);
app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.listen(KEYS.PORT, async () => {
  try {
    console.log(`Server running on port ${KEYS.PORT}`);
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
  }
});
