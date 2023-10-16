import { useEffect } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

type Workout = {
  title: string;
  reps: number;
  load: number;
};

const Home = () => {
  const { state, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:8800/api/workouts/");
        const data = await res.json();

        if (!res.ok) {
          console.log("Error in fetching workouts");
          return;
        }
        dispatch({ type: "SET_WORKOUTS", payload: data });
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="flex container mx-auto gap-8">
      <div className="w-3/4">
        {state.workouts &&
          state.workouts.map((workout) => (
            <span>
              <WorkoutDetail key={workout.title} {...workout} />
            </span>
          ))}
      </div>
      <div className="w-1/4">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
