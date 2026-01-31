# Crop Advisory for Low-Internet Farmers (Offline-First)

A premium, interactive Progressice Web App (PWA) designed to provide instant agricultural guidance to farmers, even in low-connectivity areas.

## 🚀 Key Features

### 1. Multi-Step Guided Onboarding
A seamless 8-step journey that builds a comprehensive profile for precise agricultural advice:
- **Crop Selection**: Identify the primary crop (Rice, Wheat, Sugarcane, or Maize).
- **Growth Stage**: Pinpoint the plant's development phase for stage-specific care.
- **Soil Type**: Identify soil composition (Sandy, Loam, Clay, Red) for better nutrient planning.
- **Soil Moisture**: Monitor field wetness levels.
- **Weather Selection**: An interactive SVG-based map of India to select regional weather zones (Hot & Dry, Hot & Humid, Cold, Moderate).
- **Symptom Selection**: Dynamic, multi-select system that shows disease symptoms tailored to the selected crop.
- **Diagnosis Result**: Instant detection of potential diseases (e.g., Rice Blast, Powdery Mildew) with high-res visual aids and audio summaries.
- **Action Details**: Expert-level treatment plans with step-by-step instructions, audio guides, and clear benefit analysis.

### 2. Premium UI/UX Design
- **Glassmorphism Aesthetic**: Modern, clean, and visually stunning interface.
- **Interactive Map**: Custom SVG implementation for intuitive regional weather selection.
- **High-Quality Imagery**: Integrated with professional agricultural photography from Unsplash.
- **Audio-First Accessibility**: Integrated audio playback options ("Listen Now") to assist users with varying literacy levels.

### 3. Offline-First Architecture
- **Persistent Navigation**: Fixed bottom navigation bar for quick access to Home, Advisory, History, and Profile.
- **Offline States**: Visual banners and indicators showing "OFFLINE-READY" status.
- **Fast Performance**: Built with React and Vite for near-instant transitions.

## 🛠️ Technology Stack
- **Frontend**: React.js
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with Glassmorphism
- **Icons**: Lucide-React
- **Image Sourcing**: Unsplash API Integration

## 📦 Project Structure
- `/src/components`: Reusable UI components for each step.
- `/src/App.jsx`: Core flow management and state orchestration.
- `/src/index.css`: Global design system and premium animations.

---
Developed with ❤️ for the farming community.
