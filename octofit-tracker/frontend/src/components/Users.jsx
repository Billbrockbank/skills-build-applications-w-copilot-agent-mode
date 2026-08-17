import { useEffect, useState } from 'react';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
