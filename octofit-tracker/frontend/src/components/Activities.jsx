import { useEffect, useState } from 'react';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/activities`)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity, index) => (
          <li key={index} className="list-group-item">
            {activity.activity_type} - {activity.duration} min
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
