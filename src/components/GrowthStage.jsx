import React, { useState } from 'react';
import { ArrowLeft, CloudOff, CheckCircle2 } from 'lucide-react';

const GrowthStage = ({ onBack, onConfirm }) => {
    const [selectedStage, setSelectedStage] = useState(null);

    const stages = [
        {
            id: 'sprout',
            name: 'Sprout',
            image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'grow',
            name: 'Grow',
            image: 'https://images.unsplash.com/photo-1530836361253-efad5cb2feee?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'flower',
            name: 'Flower',
            image: 'https://images.unsplash.com/photo-1599307767316-776533da941c?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 'mature',
            name: 'Mature',
            image: 'https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=600&auto=format&fit=crop'
        },
    ];

    return (
        <div className="app-container">
            {/* Top Navigation */}
            <div className="top-nav">
                <div className="offline-banner">
                    <CloudOff size={16} />
                    <span>OFFLINE-READY</span>
                </div>
            </div>

            <div className="header-section">
                <button className="back-btn" onClick={onBack}>
                    <ArrowLeft size={24} />
                </button>
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
                            <div className="selection-indicator">
                                <CheckCircle2 size={20} className="check-icon" />
                            </div>
                        </div>
                        <div className="card-info">
                            <span className="name">{stage.name}</span>
                            <CheckCircle2 size={18} className="status-icon" />
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
