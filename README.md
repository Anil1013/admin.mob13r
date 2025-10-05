# mob13r-dashboard

React + Vite dashboard connected to Xano API (public).

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run dev server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

## Notes
- The Xano base URL is embedded directly in src/App.jsx as requested:
  https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_
- Deploy on Netlify: build command `npm run build`, publish directory `dist`.
- The project includes pages for all Xano tables with Add/Edit/Delete using POST/PATCH/DELETE requests.
