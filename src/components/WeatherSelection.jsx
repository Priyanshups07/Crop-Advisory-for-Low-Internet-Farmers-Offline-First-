import React, { useState } from 'react';
import { ArrowRight, Sun, Wind, Snowflake, Leaf, CheckCircle2 } from 'lucide-react';

const WeatherSelection = ({ onConfirm }) => {
    const [selectedWeather, setSelectedWeather] = useState('hot-humid');

    const weatherOptions = [
        {
            id: 'hot-dry',
            name: 'Hot & Dry',
            zone: 'Yellow Zone',
            color: '#FFD700',
            bgColor: '#FFFCE5',
            icon: <Sun className="weather-icon" size={24} style={{ color: '#8B6A00' }} />
        },
        {
            id: 'hot-humid',
            name: 'Hot & Humid',
            zone: 'Red Zone',
            color: '#E53935',
            bgColor: '#FFEBEE',
            icon: <Wind className="weather-icon" size={24} style={{ color: '#B71C1C' }} />
        },
        {
            id: 'cold',
            name: 'Cold',
            zone: 'Blue Zone',
            color: '#1E88E5',
            bgColor: '#E3F2FD',
            icon: <Snowflake className="weather-icon" size={24} style={{ color: '#0D47A1' }} />
        },
        {
            id: 'moderate',
            name: 'Moderate',
            zone: 'Green Zone',
            color: '#43A047',
            bgColor: '#E8F5E9',
            icon: <Leaf className="weather-icon" size={24} style={{ color: '#1B5E20' }} />
        },
    ];

    return (
        <div className="app-container weather-step">
            <header className="header-section">
                <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Select Your Weather</h1>
                <p className="subtitle">Tap your region on the map or list below</p>
            </header>

            {/* Stylized India Map Area */}
            <div className="map-container">
                <svg viewBox="0 0 400 450" className="india-map">
                    {/* Simplified India Map Paths (Stylized Zones) */}
                    {/* North/Blue Zone */}
                    <path
                        className={`map-zone ${selectedWeather === 'cold' ? 'active' : ''}`}
                        onClick={() => setSelectedWeather('cold')}
                        d="M180,20 L220,30 L250,60 L230,80 L170,70 Z"
                        fill={selectedWeather === 'cold' ? '#1E88E5' : '#BDDDF4'}
                    />
                    {/* North-West/Yellow Zone */}
                    <path
                        className={`map-zone ${selectedWeather === 'hot-dry' ? 'active' : ''}`}
                        onClick={() => setSelectedWeather('hot-dry')}
                        d="M80,100 L170,80 L180,180 L100,200 L60,150 Z"
                        fill={selectedWeather === 'hot-dry' ? '#FFD700' : '#FFF9C4'}
                    />
                    {/* East-Coastal/Red Zone */}
                    <path
                        className={`map-zone ${selectedWeather === 'hot-humid' ? 'active' : ''}`}
                        onClick={() => setSelectedWeather('hot-humid')}
                        d="M250,65 L320,100 L350,180 L280,250 L220,200 Z"
                        fill={selectedWeather === 'hot-humid' ? '#E53935' : '#FFCDD2'}
                    />
                    {/* Central-South/Green Zone */}
                    <path
                        className={`map-zone ${selectedWeather === 'moderate' ? 'active' : ''}`}
                        onClick={() => setSelectedWeather('moderate')}
                        d="M100,205 L185,185 L280,255 L200,420 L150,300 Z"
                        fill={selectedWeather === 'moderate' ? '#43A047' : '#C8E6C9'}
                    />
                    {/* Outer Boundary Line (Simplified) */}
                    <path
                        className="map-boundary"
                        d="M180,20 L250,60 L350,180 L200,420 L80,100 Z"
                        fill="none" stroke="#e2e8f0" strokeWidth="2"
                    />
                </svg>
                <div className="map-legend">
                    <div className="legend-item"><span className="dot" style={{ background: '#FFD700' }}></span> HOT & DRY</div>
                    <div className="legend-item"><span className="dot" style={{ background: '#E53935' }}></span> HOT & HUMID</div>
                    <div className="legend-item"><span className="dot" style={{ background: '#1E88E5' }}></span> COLD</div>
                </div>
            </div>

            {/* Selection List */}
            <div className="weather-list" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {weatherOptions.map((opt) => (
                    <div
                        key={opt.id}
                        className={`weather-card ${selectedWeather === opt.id ? 'active' : ''}`}
                        onClick={() => setSelectedWeather(opt.id)}
                        style={{
                            padding: '16px',
                            borderRadius: '20px',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: selectedWeather === opt.id ? '2px solid #2d5a27' : '1px solid #edf2f7',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                            backgroundColor: selectedWeather === opt.id ? '#f0fdf4' : 'white'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div
                                className="icon-box"
                                style={{
                                    background: opt.bgColor,
                                    padding: '12px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {opt.icon}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '18px', fontWeight: '800', color: '#1a202c' }}>{opt.name}</span>
                                <span style={{ fontSize: '14px', color: '#718096', fontWeight: '600' }}>{opt.zone}</span>
                            </div>
                        </div>
                        <div
                            style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                border: selectedWeather === opt.id ? 'none' : '2px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: selectedWeather === opt.id ? '#2d5a27' : 'transparent'
                            }}
                        >
                            {selectedWeather === opt.id && <CheckCircle2 size={16} color="white" />}
                        </div>
                    </div>
                ))}
            </div>

            <div className="button-container" style={{ marginTop: '24px' }}>
                <button
                    className="confirm-btn"
                    onClick={() => onConfirm(selectedWeather)}
                    style={{
                        backgroundColor: '#2d5a27',
                        color: 'white',
                        borderRadius: '16px',
                        fontSize: '18px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    CONFIRM WEATHER <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </button>
            </div>
        </div>
    );
};

export default WeatherSelection;
