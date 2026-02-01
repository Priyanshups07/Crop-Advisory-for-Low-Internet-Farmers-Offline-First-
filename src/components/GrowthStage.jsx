import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmButton from './ConfirmButton';

import LanguageSwitcher from './LanguageSwitcher';

import sproutImg from '../assets/sprout_stage.png';
import growImg from '../assets/grow_stage.png';
import flowerImg from '../assets/flower_stage.png';
import matureImg from '../assets/mature_stage.png';

const GrowthStage = ({ onConfirm }) => {
  const { t } = useTranslation();
  const [selectedStage, setSelectedStage] = useState(null);

  const stages = [
    { id: 'sprout', name: t('stages.sprout'), image: sproutImg },
    { id: 'grow', name: t('stages.grow'), image: growImg },
    { id: 'flower', name: t('stages.flower'), image: flowerImg },
    { id: 'mature', name: t('stages.mature'), image: matureImg },
  ];

  return (
    <div className="growth-step">
      <div className="header-section">
        <h1>{t('steps.growth')}</h1>
        <p className="subtitle">{t('prompts.tapStage')}</p>
      </div>

      <div className="crop-grid">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`crop-card ${selectedStage === stage.id ? 'selected' : ''}`}
            onClick={() => setSelectedStage(stage.id)}
          >
            <div className="image-wrapper">
              <img src={stage.image} alt={stage.name} />
            </div>
            <div className="card-info">
              <span className="name">{stage.name}</span>
            </div>
          </div>
        ))}
      </div>

      <ConfirmButton
        disabled={!selectedStage}
        onClick={() => onConfirm(selectedStage)}
      />
    </div>


  );
};

export default GrowthStage;
