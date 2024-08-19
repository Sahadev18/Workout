import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/" id="home-link">
          Workout Geek
        </Link>
      </div>
    </header>
  );
}
