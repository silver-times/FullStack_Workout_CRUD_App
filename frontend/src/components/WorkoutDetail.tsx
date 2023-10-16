import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

type WorkoutDetailProps = {
  id: number;
  title: string;
  reps: number;
  load: number;
};

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({
  id,
  title,
  reps,
  load,
}) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch(`http://localhost:8800/api/workouts/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Workout deleted");
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    } else {
      console.log("Workout not deleted");
    }
  };

  return (
    <div className="rounded-xl my-5 mx-auto p-5 relative shadow-lg border-2 border-heading bg-[#1F8A70]">
      <div className="flex justify-between items-center">
        <h1 className="my-2 uppercase text-heading  font-extrabold text-3xl">
          {title}
        </h1>
        <span
          onClick={handleClick}
          className="material-symbols-outlined bg-warning rounded-full p-1 text-black hover:text-white hover:bg-black  cursor-pointer"
        >
          delete
        </span>
      </div>
      <p className="text-xl font-light text-white">
        <strong>Load (kg):</strong> {load}
      </p>
      <p className="text-xl font-light text-white">
        <strong>Reps:</strong> {reps}
      </p>
    </div>
  );
};

export default WorkoutDetail;
