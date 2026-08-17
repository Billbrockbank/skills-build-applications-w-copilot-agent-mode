import { useEffect, useState } from 'react';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team, index) => (
          <li key={index} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
