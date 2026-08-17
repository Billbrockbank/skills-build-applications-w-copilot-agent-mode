import { useEffect, useState } from 'react';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/workouts`)
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((err) => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((workout, index) => (
          <li key={index} className="list-group-item">
            {workout.name} - {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
