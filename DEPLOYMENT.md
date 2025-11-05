# Deployment Guide for EilaajVerse Browser

## Overview
EilaajVerse Browser is a full-stack application with:
- **Frontend**: React + Vite (deployable to Netlify)
- **Backend**: Express.js API server (requires separate deployment)
- **Database**: PostgreSQL (Neon/Replit or any PostgreSQL provider)

## Option 1: Deploy Frontend to Netlify (Recommended)

### Frontend Deployment
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20

### Backend Deployment
The Express backend (server/index.js) must be deployed separately to:
- **Render** (recommended for free tier)
- **Railway**
- **Heroku**
- **AWS/Google Cloud**

#### Deploy Backend to Render:
1. Create new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Environment Variables**: Add DATABASE_URL, PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE

#### Update Frontend API Calls:
After deploying backend, update `vite.config.ts` to proxy API calls to your production backend:
```typescript
export default defineConfig({
  // ... other config
  server: {
    proxy: {
      '/api': {
        target: 'https://your-backend.onrender.com', // Your deployed backend URL
        changeOrigin: true,
      },
    },
  },
});
```

Or create environment variable `VITE_API_URL` and update API calls in components to use:
```typescript
const API_URL = import.meta.env.VITE_API_URL || '/api';
```

## Option 2: Deploy Everything to Replit

Use Replit's built-in deployment (already configured):
- Frontend and backend run together
- Database already connected
- No additional configuration needed
- Click "Deploy" button in Replit

## Option 3: Serverless Backend (Advanced)

Convert Express API to Netlify Functions:
1. Create `netlify/functions/` directory
2. Convert each Express route to a serverless function
3. Update netlify.toml to redirect `/api/*` to functions

## Environment Variables

For production deployment, you'll need:
- `DATABASE_URL` - PostgreSQL connection string
- `PGHOST` - Database host
- `PGPORT` - Database port
- `PGUSER` - Database username
- `PGPASSWORD` - Database password
- `PGDATABASE` - Database name
- `VITE_API_URL` (optional) - Backend API URL for frontend

## Current Status

✅ **Ready for Deployment**:
- Frontend build configured for Netlify
- All dashboards functional with interactive features
- Play Store QR code integration (doctors/patients only)
- LinkedIn footer integration
- Security headers configured

⚠️ **Requires Configuration**:
- Backend needs separate deployment
- API URL configuration needed for production
- Database credentials for production database

## Testing Production Build Locally

```bash
# Build frontend
npm run build

# Preview production build
npm run preview

# Test backend separately
npm run server
```

## Notes

- Guest mode will work without backend (demo data only)
- Full authentication requires deployed backend
- Credential verification requires database access
