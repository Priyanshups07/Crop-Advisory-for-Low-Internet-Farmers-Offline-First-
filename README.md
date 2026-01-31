# Crop-Advisory-for-Low-Internet-Farmers-Offline-First-
Overview
This project is a Progressive Web App (PWA) that provides crop advisory services to farmers. It is designed to be accessible to users with low literacy and to function reliably in areas with intermittent or no connectivity.

Features
Offline-First:
All data and user interactions are stored locally and available offline for at least 48 hours.
Data is synced to the backend automatically or manually when the device is online.
Tap-Only Input:
All interactions are performed through simple taps.
No typing is required at any stage.
Low-Literacy UX:
Step-by-step interface with clear icons and minimal text.
Multilingual support (English, Hindi, Marathi).
Speech synthesis for all advice and prompts.
Backend Integration:
Data is synced to an Express/MongoDB backend when connectivity is available.
Tech Stack
Frontend: React, Vite, Dexie (IndexedDB), Axios, PWA
Backend: Express, MongoDB, Mongoose

Installation & Running

### Frontend
1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
    node server.js
   ```
4. The backend server will run on `http://localhost:5000` (or the configured port)

### Running Both Together
For development, you can run the frontend and backend in separate terminals simultaneously:
- Terminal 1: From project root, run `npm run dev` (Frontend)
- Terminal 2: From `backend/` directory, run `node server.js` (Backend)

Usage
Select your language.
Tap through each step (crop, problem, soil, stage).
Receive advice (text + speech).
Data is saved locally and synced when online.

