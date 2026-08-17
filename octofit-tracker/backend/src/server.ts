import express from 'express';
import cors from 'cors';
import db from './config/database';

const app = express();
const PORT = 8000;

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(express.json());
app.use(cors());

app.get('/api/users', async (_req, res) => {
  res.json([]);
});

app.get('/api/activities', async (_req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Server running at ${baseUrl}`);
});

export default app;
