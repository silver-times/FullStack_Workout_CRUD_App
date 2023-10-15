import React from "react";

type WorkoutDetailProps = {
  title: string;
  reps: number;
  load: number;
};

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ title, reps, load }) => {
  return (
    <div className="rounded-xl my-5 mx-auto p-5 relative shadow-lg border-2 bg-[#1F8A70]">
      <h2 className="my-2 uppercase text-heading  font-extrabold">{title}</h2>
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
