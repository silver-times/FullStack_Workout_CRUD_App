import { useEffect, useState } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:8800/api/workouts/");
        const data = await res.json();

        if (!res.ok) {
          console.log("Error in fetching workouts");
          return;
        }
        console.log(data);
        setWorkouts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="flex container mx-auto gap-8">
      <div className="w-2/3">
        <h1 className="text-2xl ">
          {workouts &&
            workouts.map((workout: any) => (
              <WorkoutDetail key={workout.id} {...workout} />
            ))}
        </h1>
      </div>
      <div className="w-1/3">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
