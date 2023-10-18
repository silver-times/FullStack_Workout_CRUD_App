import { useEffect } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { state, dispatch } = useWorkoutContext();
  const { user, token } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:8800/api/workouts/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log("TESTING");

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
  }, [dispatch, user, token]);

  return (
    <div className="flex container mx-auto gap-8">
      <div className="w-3/4">
        {state.workouts &&
          state.workouts.map((workout) => (
            <span key={workout.title} className="mb-32">
              <WorkoutDetail {...workout} />
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
