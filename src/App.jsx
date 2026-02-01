import React, { useState, useEffect } from "react";
import { db } from "./db";
import axios from "axios";
import TopBanner from "./components/TopBanner";
import CropCard from "./components/CropCard";
import ConfirmButton from "./components/ConfirmButton";
import GrowthStage from "./components/GrowthStage";
import SoilType from "./components/SoilType";
import SoilMoisture from "./components/SoilMoisture";
import WeatherSelection from "./components/WeatherSelection";
import SymptomSelection from "./components/SymptomSelection";
import DiagnosisResult from "./components/DiagnosisResult";
import ActionDetails from "./components/ActionDetails";
import { useTranslation } from 'react-i18next';
import './i18n';

const App = () => {
  const { t } = useTranslation();
  // Sync function: upload unsynced reports to backend
  const syncReports = async () => {
    if (!navigator.onLine) return;
    const unsynced = await db.reports.where("synced").notEqual(1).toArray();
    if (unsynced.length) {
      try {
        await axios.post("http://localhost:5000/sync", unsynced);
        await db.reports.where("synced").notEqual(1).modify({ synced: 1 });
      } catch (e) {
        /* ignore offline errors */
      }
    }
  };

  useEffect(() => {
    window.addEventListener("online", syncReports);
    syncReports();
    return () => window.removeEventListener("online", syncReports);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedSoil, setSelectedSoil] = useState(null);
  const [selectedMoisture, setSelectedMoisture] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const crops = [
    { id: "rice", name: t('crops.rice'), image: "/images/rice.png" },
    {
      id: "wheat",
      name: t('crops.wheat'),
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "sugarcane",
      name: t('crops.sugarcane'),
      image:
        "https://images.unsplash.com/photo-1650192388648-65800ec59fee?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "maize",
      name: t('crops.maize'),
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const toggleCrop = (id) => {
    setSelectedCrops((prev) => (prev.includes(id) ? [] : [id]));
  };

  const handleCropConfirm = () => {
    setCurrentStep(2);
  };

  const handleStageConfirm = (stage) => {
    setSelectedStage(stage);
    setCurrentStep(3);
  };

  const handleSoilConfirm = (soil) => {
    setSelectedSoil(soil);
    setCurrentStep(4);
  };

  const handleMoistureConfirm = (moisture) => {
    setSelectedMoisture(moisture);
    setCurrentStep(5);
  };

  const handleWeatherConfirm = (weather) => {
    setSelectedWeather(weather);
    setCurrentStep(6);
  };

  const handleSymptomConfirm = (symptoms) => {
    setSelectedSymptoms(symptoms);
    setCurrentStep(7);
  };

  const handleDiagnosisConfirm = async () => {
    // Save advisory to IndexedDB for offline sync
    await db.reports.add({
      crop: selectedCrops[0],
      stage: selectedStage,
      soil: selectedSoil,
      symptoms: selectedSymptoms,
      synced: 0,
    });
    syncReports();
    handleDone();
  };

  const handleDone = () => {
    alert("Onboarding complete! Your agricultural profile has been saved.");
    setCurrentStep(1);
    setSelectedCrops([]);
    setSelectedStage(null);
    setSelectedSoil(null);
    setSelectedMoisture(null);
    setSelectedWeather(null);
    setSelectedSymptoms([]);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderContent = () => {
    if (currentStep === 7) {
      return (
        <DiagnosisResult
          crop={selectedCrops[0]}
          symptoms={selectedSymptoms}
          onBack={handleBack}
          onConfirm={handleDiagnosisConfirm}
        />
      );
    }
    if (currentStep === 6) {
      return (
        <SymptomSelection
          crop={selectedCrops[0]}
          onBack={handleBack}
          onConfirm={handleSymptomConfirm}
        />
      );
    }
    if (currentStep === 5) {
      return <WeatherSelection onBack={handleBack} onConfirm={handleWeatherConfirm} />;
    }
    if (currentStep === 4) {
      return (
        <SoilMoisture onBack={handleBack} onConfirm={handleMoistureConfirm} />
      );
    }
    if (currentStep === 3) {
      return <SoilType onBack={handleBack} onConfirm={handleSoilConfirm} />;
    }
    if (currentStep === 2) {
      return <GrowthStage onBack={handleBack} onConfirm={handleStageConfirm} />;
    }
    return (
      <div className="app-container">
        <div className="top-nav" style={{ justifyContent: 'flex-end' }}>
          <TopBanner />
        </div>
        <div className="header-section">
          <h1>{t('welcome')}</h1>
          <p className="subtitle">{t('tapCropsYouGrow')}</p>
        </div>
        <div className="crop-grid">
          {crops.map((crop) => (
            <CropCard
              key={crop.id}
              name={crop.name}
              image={crop.image}
              selected={selectedCrops.includes(crop.id)}
              onClick={() => toggleCrop(crop.id)}
            />
          ))}
        </div>
        <ConfirmButton
          disabled={selectedCrops.length === 0}
          onClick={handleCropConfirm}
        />
      </div>
    );
  };

  return (
    <>
      <div className="main-content">{renderContent()}</div>
    </>
  );
};

export default App;
