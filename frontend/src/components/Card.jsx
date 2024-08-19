export default function Card({ workout }) {
  return (
    <div className="card">
      <h3>{workout.title}</h3>
      <div className="details">
        <p>
          <b>Reps:</b> {workout.reps}
        </p>
        <p>
          <b>Load:</b> {workout.load}
        </p>
      </div>
      <p id="time">{workout.createdAt}</p>
    </div>
  );
}
