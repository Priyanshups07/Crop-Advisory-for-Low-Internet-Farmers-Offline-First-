import React, { useState } from 'react';
import { ArrowLeft, CloudOff, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

import sandyImg from '../assets/sandy_soil.png';
import loamImg from '../assets/loam_soil.png';

const SoilType = ({ onBack, onConfirm }) => {
  const { t } = useTranslation();
  const [selectedSoil, setSelectedSoil] = useState(null);

  const soils = [
    { id: 'sandy', name: t('soils.sandy'), image: sandyImg },
    { id: 'loam', name: t('soils.loam'), image: loamImg },
    { id: 'clay', name: t('soils.clay'), image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=600&auto=format&fit=crop' },
    { id: 'red', name: t('soils.red'), image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="app-container">
      <div className="top-nav">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="offline-banner" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LanguageSwitcher />
          <CloudOff size={16} />
          <span>{t('offlineReady')}</span>
        </div>
      </div>

      <div className="header-section">
        <h1>{t('steps.soil')}</h1>
        <p className="subtitle">{t('prompts.selectSoil')}</p>
      </div>

      <div className="crop-grid">
        {soils.map((soil) => (
          <div
            key={soil.id}
            className={`crop-card ${selectedSoil === soil.id ? 'selected' : ''}`}
            onClick={() => setSelectedSoil(soil.id)}
          >
            <div className="image-wrapper">
              <img src={soil.image} alt={soil.name} />
            </div>
            <div className="card-info">
              <span className="name">{soil.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button
          className="confirm-btn primary"
          disabled={!selectedSoil}
          onClick={() => onConfirm(selectedSoil)}
        >
          {t('continue')} <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SoilType;
