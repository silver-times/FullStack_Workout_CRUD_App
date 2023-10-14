import { useEffect, useState } from "react";

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
    <div>
      <h1 className="text-2xl uppercase">
        hi
        {workouts &&
          workouts.map((workout: any) => (
            <div key={workout.id}>
              <h2>{workout.title}</h2>
            </div>
          ))}
      </h1>
    </div>
  );
};

export default Home;
