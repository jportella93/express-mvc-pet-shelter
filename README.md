# Express MVC Demo (Portfolio Deployment Ready)

This is a small **server-side Express** app using **Handlebars** templates.

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Deploy (Render)

- **Type**: Web Service
- **Build command**: `npm install`
- **Start command**: `npm start`
- **Environment**:
  - `PORT` is provided automatically by Render (the app uses it).

### Health check

`GET /healthz` returns `ok`.

## Data storage

This demo uses an **in-memory data store** (`db.js`). It resets on every deploy/restart, which is fine for demo/portfolio use.
