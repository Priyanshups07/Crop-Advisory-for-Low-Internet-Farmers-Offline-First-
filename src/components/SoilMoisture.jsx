import React, { useState } from 'react';
import { ArrowLeft, CloudOff, CheckCircle2 } from 'lucide-react';

import dryImg from '../assets/sandy_soil.png';
import slightImg from '../assets/loam_soil.png';
import optimalImg from '../assets/optimal_soil_v2.png';
import wetImg from '../assets/wet_soil_v2.png';

const SoilMoisture = ({ onBack, onConfirm }) => {
    const [selectedMoisture, setSelectedMoisture] = useState(null);

    const moistureLevels = [
        {
            id: 'dry',
            name: 'Dry Soil',
            range: '0% - 25%',
            image: dryImg
        },
        {
            id: 'slight',
            name: 'Slightly Moist',
            range: '26% - 50%',
            image: slightImg
        },
        {
            id: 'optimal',
            name: 'Optimal',
            range: '51% - 75%',
            image: optimalImg
        },
        {
            id: 'wet',
            name: 'Wet Soil',
            range: '76% - 100%',
            image: wetImg
        },
    ];

    return (
        <div className="app-container">
            {/* Top Navigation */}
            <div className="top-nav">
                <button className="back-btn" onClick={onBack}>
                    <ArrowLeft size={24} />
                </button>
                <div className="offline-banner">
                    <CloudOff size={16} />
                    <span>OFFLINE-READY</span>
                </div>
            </div>

            <div className="header-section">
                <h1>Soil Moisture</h1>
                <p className="subtitle">How wet is the field today?</p>
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
                        <div className="card-info" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                            <span className="name">{level.name}</span>
                            <span className="subtitle" style={{ fontSize: '12px' }}>{level.range}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="button-container">
                <button
                    className="confirm-btn primary"
                    disabled={!selectedMoisture}
                    onClick={() => onConfirm(selectedMoisture)}
                >
                    CONFIRM MOISTURE LEVEL
                </button>
            </div>
        </div>
    );
};

export default SoilMoisture;
