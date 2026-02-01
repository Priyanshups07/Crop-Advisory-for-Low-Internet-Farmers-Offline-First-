import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmButton from './ConfirmButton';
import TopBanner from './TopBanner';

import dryImg from '../assets/sandy_soil.png';
import slightImg from '../assets/loam_soil.png';
import optimalImg from '../assets/optimal_soil_v2.png';
import wetImg from '../assets/wet_soil_v2.png';

const SoilMoisture = ({ onBack, onConfirm }) => {
    const { t } = useTranslation();
    const [selectedMoisture, setSelectedMoisture] = useState(null);

    const moistureLevels = [
        {
            id: 'dry',
            name: t('moisture.dry'),
            range: '0% - 25%',
            image: dryImg
        },
        {
            id: 'slight',
            name: t('moisture.slight'),
            range: '26% - 50%',
            image: slightImg
        },
        {
            id: 'optimal',
            name: t('moisture.optimal'),
            range: '51% - 75%',
            image: optimalImg
        },
        {
            id: 'wet',
            name: t('moisture.wet'),
            range: '76% - 100%',
            image: wetImg
        },
    ];

    return (
        <div className="app-container moisture-step">
            <TopBanner onBack={onBack} />

            <div className="header-section">
                <h1>{t('steps.moisture')}</h1>
                <p className="subtitle">{t('prompts.howWet')}</p>
            </div>

            <div className="crop-grid">
                {moistureLevels.map((level) => (
                    <div
                        key={level.id}
                        className={`crop-card ${selectedMoisture === level.id ? 'selected' : ''}`}
                        onClick={() => setSelectedMoisture(level.id)}
                    >
                        <div className="image-wrapper">
                            <img src={level.image} alt={level.name} />
                        </div>
                        <div className="card-info" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                            <span className="name" style={{ fontSize: '14px' }}>{level.name}</span>
                            <span className="subtitle" style={{ fontSize: '11px', opacity: 0.7 }}>{level.range}</span>
                        </div>
                    </div>
                ))}
            </div>

            <ConfirmButton
                disabled={!selectedMoisture}
                onClick={() => onConfirm(selectedMoisture)}
            />
        </div>
    );
};

export default SoilMoisture;
