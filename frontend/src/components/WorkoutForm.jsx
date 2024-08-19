import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

export default function WorkoutForm() {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  async function handelSubmit(e) {
    e.preventDefault();
    const newWorkout = { title: title, reps: reps, load: load };
    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      body: JSON.stringify(newWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
      setWorkouts([json, ...workouts]);
      console.log("Workout was added", json);
    }

    if (!response.ok) {
      setError(json.error);
    }
  }

  return (
    <form action="" className="workout-form" onSubmit={handelSubmit}>
      <h4>Add a new Workout</h4>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="number"
        value={reps}
        placeholder="Reps"
        onChange={(e) => {
          setReps(e.target.value);
        }}
      />
      <input
        type="number"
        value={load}
        placeholder="Load(Kg)"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
      />
      <button type="submit">Add</button>
      {error && <p>{error}</p>}
    </form>
  );
}
