import { useEffect, useState } from 'react';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/leaderboard`)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
