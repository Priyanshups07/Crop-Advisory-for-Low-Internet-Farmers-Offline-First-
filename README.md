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

Usage
Select your language.
Tap through each step (crop, problem, soil, stage).
Receive advice (text + speech).
Data is saved locally and synced when online.
