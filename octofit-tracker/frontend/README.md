# Octofit Tracker Frontend

## Configuration

`VITE_CODESPACE_NAME` must be defined when the frontend should call the backend through a GitHub Codespaces forwarded port. Create `octofit-tracker/frontend/.env.local` with:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The app calls resources at `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/<component>/`. When the variable is not set, it safely uses relative `/api/<component>/` requests instead of constructing an invalid URL.
