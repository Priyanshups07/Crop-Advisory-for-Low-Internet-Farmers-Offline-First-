import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmButton from './ConfirmButton';
import TopBanner from './TopBanner';


import sandyImg from '../assets/sandy_soil.png';
import loamImg from '../assets/loam_soil.png';
import clayImg from '../assets/soils/clay_soil.svg';
import redImg from '../assets/soils/red_soil.svg';

const SoilType = ({ onBack, onConfirm }) => {
  const { t } = useTranslation();
  const [selectedSoil, setSelectedSoil] = useState(null);

  const soils = [
    { id: 'sandy', name: t('soils.sandy'), image: sandyImg },
    { id: 'loam', name: t('soils.loam'), image: loamImg },
    { id: 'clay', name: t('soils.clay'), image: clayImg },
    { id: 'red', name: t('soils.red'), image: redImg },
  ];

  return (
    <div className="app-container soil-step">
      <TopBanner onBack={onBack} />

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
              <span className="name" style={{ fontSize: '14px' }}>{soil.name}</span>
            </div>
          </div>
        ))}
      </div>

      <ConfirmButton
        disabled={!selectedSoil}
        onClick={() => onConfirm(selectedSoil)}
      />
    </div>
  );
};

export default SoilType;
