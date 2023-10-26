import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import EditWorkout from "./EditWorkout";
import { useAuthContext } from "../hooks/useAuthContext";

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
  const [isEditing, setIsEditing] = useState(false);
  const { token } = useAuthContext();

  const handleDelete = async () => {
    const response = await fetch(
      `https://fullstack-workout-crud-app.onrender.com/api/workouts/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      console.log("Workout deleted");
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    } else {
      console.log("Workout not deleted");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="rounded-xl my-5 mx-auto p-5 relative shadow-lg border-2 border-heading bg-[#1F8A70]">
      {isEditing ? (
        <EditWorkout
          setIsEditing={setIsEditing}
          id={id}
          title={title}
          reps={reps}
          load={load}
        />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="my-2 uppercase text-heading  font-extrabold text-3xl">
              {title}
            </h1>
            <div className="flex gap-2">
              <span
                onClick={handleEdit}
                className="material-symbols-outlined bg-heading rounded-full p-1 text-black hover:text-white hover:bg-black  cursor-pointer"
              >
                edit
              </span>
              <span
                onClick={handleDelete}
                className="material-symbols-outlined bg-warning rounded-full p-1 text-black hover:text-white hover:bg-black  cursor-pointer"
              >
                delete
              </span>
            </div>
          </div>
          <p className="text-xl font-light text-white">
            <strong>Load (kg):</strong> {load}
          </p>
          <p className="text-xl font-light text-white">
            <strong>Reps:</strong> {reps}
          </p>
        </>
      )}
    </div>
  );
};

export default WorkoutDetail;
