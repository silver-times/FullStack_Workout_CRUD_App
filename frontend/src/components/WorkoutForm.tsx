import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

type Workout = {
  title: string;
  reps: number;
  load: number;
};

const WorkoutForm: React.FC = () => {
  const { dispatch } = useWorkoutContext();

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const workout: Workout = {
      title,
      reps,
      load,
    };

    const res = await fetch("http://localhost:8800/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      return;
    }

    setTitle("");
    setReps(0);
    setLoad(0);
    setError(null);
    dispatch({ type: "CREATE_WORKOUT", payload: json });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold uppercas text-3xl text-white text-center mt-5">
        Add a new workout
      </h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="my-4 block w-full px-4 py-4 bg-white border-2 border-heading rounded-lg text-xl placeholder-primary focus:outline-none focus:border-heading focus:ring-1 focus:ring-heading invalid:border-warning invalid:text-warning focus:invalid:border-warning focus:invalid:ring-warning "
      />

      <input
        type="text"
        placeholder="Load (in kg)"
        value={reps}
        onChange={(event) => setReps(parseInt(event.target.value))}
        className="my-4 block w-full px-4 py-4 bg-white border-2 border-heading rounded-lg text-xl placeholder-primary focus:outline-none focus:border-heading focus:ring-1 focus:ring-heading invalid:border-warning invalid:text-warning focus:invalid:border-warning focus:invalid:ring-warning "
      />

      <input
        type="number"
        placeholder="Reps"
        value={load}
        onChange={(event) => setLoad(parseInt(event.target.value))}
        className="my-4 block w-full px-4 py-4 bg-white border-2 border-heading rounded-lg text-xl placeholder-primary focus:outline-none focus:border-heading focus:ring-1 focus:ring-heading invalid:border-warning invalid:text-warning focus:invalid:border-warning focus:invalid:ring-warning "
      />

      <button
        type="submit"
        className="my-4 block w-full px-4 py-4 bg-secondary hover:bg-primary border-2 border-heading rounded-lg text-2xl text-white "
      >
        Submit
      </button>
      {error && <p className="text-warning">{error}</p>}
    </form>
  );
};

export default WorkoutForm;
