import React, { useState } from 'react';
import { ArrowLeft, CloudOff, CheckCircle2 } from 'lucide-react';

import sandyImg from '../assets/sandy_soil.png';
import loamImg from '../assets/loam_soil.png';

const SoilType = ({ onBack, onConfirm }) => {
    const [selectedSoil, setSelectedSoil] = useState(null);

    const soils = [
        {
            id: 'sandy',
            name: 'Sandy',
            image: sandyImg
        },
        {
            id: 'loam',
            name: 'Loam',
            image: loamImg
        },
        {
            id: 'clay',
            name: 'Clay',
            image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'red',
            name: 'Red',
            image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop'
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
                <h1>Soil Type</h1>
                <p className="subtitle">Select your land's soil</p>
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
                    Confirm Soil Type <CheckCircle2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default SoilType;
