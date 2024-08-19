import { useEffect, useContext } from "react";
import Card from "../components/Card";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutContext } from "../context/WorkoutContext";

export default function Home() {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="main">
      <div className="workouts">
        {workouts.map((workout) => (
          <Card key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
