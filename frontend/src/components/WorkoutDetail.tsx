import React from "react";

type WorkoutDetailProps = {
  title: string;
  reps: number;
  load: number;
};

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ title, reps, load }) => {
  return (
    <div className="rounded-md my-5 mx-auto p-5 relative shadow-lg border-2">
      <h2 className="my-2 uppercase text-[#1aac83] font-bold">{title}</h2>
      <p className="text-xl">
        <strong>Load (kg):</strong> {load}
      </p>
      <p className="text-xl">
        <strong>Reps:</strong> {reps}
      </p>
    </div>
  );
};

export default WorkoutDetail;
