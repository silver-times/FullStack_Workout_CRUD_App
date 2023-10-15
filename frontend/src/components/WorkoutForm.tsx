import React, { useState } from "react";

// type WorkoutFormProps = {
//   onSubmit: (title: string, reps: number, load: number) => void;
// };

const WorkoutForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit(title, reps, load);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold uppercase">Add a new workout</h3>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Reps:
        <input
          type="number"
          value={reps}
          onChange={(event) => setReps(parseInt(event.target.value))}
        />
      </label>
      <label>
        Load (kg):
        <input
          type="number"
          value={load}
          onChange={(event) => setLoad(parseInt(event.target.value))}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkoutForm;
