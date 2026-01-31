import React, { useState } from 'react';
import { ArrowLeft, CloudOff, CheckCircle2 } from 'lucide-react';

const SoilMoisture = ({ onBack, onConfirm }) => {
    const [selectedMoisture, setSelectedMoisture] = useState(null);

    const moistureLevels = [
        {
            id: 'dry',
            name: 'Dry Soil',
            range: '0% - 25%',
            image: 'https://images.unsplash.com/photo-1504198453319-5ce911baf2ea?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'slight',
            name: 'Slightly Moist',
            range: '26% - 50%',
            image: 'https://images.unsplash.com/photo-1589140417258-3f4340798be4?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'optimal',
            name: 'Optimal',
            range: '51% - 75%',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'wet',
            name: 'Wet Soil',
            range: '76% - 100%',
            image: 'https://images.unsplash.com/photo-1605000797439-75a1500858fb?q=80&w=600&auto=format&fit=crop'
        },
    ];

    return (
        <div className="app-container" style={{ paddingBottom: '90px' }}>
            {/* Top Navigation */}
            <div className="top-nav">
                <button className="back-btn" onClick={onBack}>
                    <ArrowLeft size={24} />
                </button>
                <span className="page-title" style={{ fontSize: '20px', fontWeight: '700' }}>Soil Moisture</span>
                <div className="offline-banner">
                    <span>OFFLINE-READY</span>
                </div>
            </div>



            <div className="header-section">
                <h1 style={{ fontSize: '36px' }}>How wet is your soil?</h1>
                <p className="subtitle">Select the closest match for your field.</p>
            </div>

            <div className="crop-grid" style={{ marginTop: '32px' }}>
                {moistureLevels.map((level) => (
                    <div
                        key={level.id}
                        className={`crop-card ${selectedMoisture === level.id ? 'selected' : ''}`}
                        onClick={() => setSelectedMoisture(level.id)}
                        style={{ padding: '12px', border: selectedMoisture === level.id ? '3px solid #00E676' : '3px solid transparent' }}
                    >
                        <div className="image-wrapper">
                            <img src={level.image} alt={level.name} />
                            <div className="selection-indicator" style={{ backgroundColor: selectedMoisture === level.id ? '#00E676' : 'white', display: 'flex' }}>
                                <CheckCircle2 size={20} className="check-icon" style={{ color: selectedMoisture === level.id ? 'white' : '#cbd5e0' }} />
                            </div>
                        </div>
                        <div className="card-info" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                            <span className="name" style={{ fontSize: '18px' }}>{level.name}</span>
                            <span className="range" style={{ color: '#a0aec0', fontSize: '14px', fontWeight: '600' }}>{level.range}</span>
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
