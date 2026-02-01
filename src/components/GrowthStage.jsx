import React, { useState } from 'react';
import { ArrowLeft, CloudOff, CheckCircle2 } from 'lucide-react';

import sproutImg from '../assets/sprout_stage.png';
import growImg from '../assets/grow_stage.png';
import flowerImg from '../assets/flower_stage.png';
import matureImg from '../assets/mature_stage.png';

const GrowthStage = ({ onBack, onConfirm }) => {
    const [selectedStage, setSelectedStage] = useState(null);

    const stages = [
        {
            id: 'sprout',
            name: 'Sprout',
            image: sproutImg
        },
        {
            id: 'grow',
            name: 'Grow',
            image: growImg
        },
        {
            id: 'flower',
            name: 'Flower',
            image: flowerImg
        },
        {
            id: 'mature',
            name: 'Mature',
            image: matureImg
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
                <h1>Growth Stage</h1>
                <p className="subtitle">Tap your crop's current stage</p>
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

            <div className="button-container">
                <button
                    className="confirm-btn primary"
                    disabled={!selectedStage}
                    onClick={() => onConfirm(selectedStage)}
                >
                    Confirm Stage <CheckCircle2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default GrowthStage;
