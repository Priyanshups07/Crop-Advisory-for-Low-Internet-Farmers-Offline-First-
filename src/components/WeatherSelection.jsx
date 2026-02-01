import React, { useState } from 'react';
import { Sun, Wind, Snowflake, Leaf, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ConfirmButton from './ConfirmButton';

const WeatherSelection = ({ onConfirm }) => {
  const { t } = useTranslation();
  const [selectedWeather, setSelectedWeather] = useState('hot-humid');

  const weatherOptions = [
    { id: 'hot-dry', name: t('weather.hotDry'), zone: t('weather.zones.yellow'), color: '#FFD700', bgColor: '#FFFCE5', icon: <Sun className="weather-icon" size={24} style={{ color: '#8B6A00' }} /> },
    { id: 'hot-humid', name: t('weather.hotHumid'), zone: t('weather.zones.red'), color: '#E53935', bgColor: '#FFEBEE', icon: <Wind className="weather-icon" size={24} style={{ color: '#B71C1C' }} /> },
    { id: 'cold', name: t('weather.cold'), zone: t('weather.zones.blue'), color: '#1E88E5', bgColor: '#E3F2FD', icon: <Snowflake className="weather-icon" size={24} style={{ color: '#0D47A1' }} /> },
    { id: 'moderate', name: t('weather.moderate'), zone: t('weather.zones.green'), color: '#43A047', bgColor: '#E8F5E9', icon: <Leaf className="weather-icon" size={24} style={{ color: '#1B5E20' }} /> },
  ];

  return (
    <div className="weather-step">
      <header className="header-section">
        <h1>{t('steps.weather')}</h1>
        <p className="subtitle">{t('prompts.selectClimate')}</p>
      </header>

      <div className="map-container" style={{ borderRadius: '32px', boxShadow: 'var(--card-shadow)', border: '1px solid var(--glass-border)', background: 'white' }}>
        <svg viewBox="0 0 400 450" className="india-map">
          <path className={`map-zone ${selectedWeather === 'cold' ? 'active' : ''}`} onClick={() => setSelectedWeather('cold')} d="M180,20 L220,30 L250,60 L230,80 L170,70 Z" fill={selectedWeather === 'cold' ? '#1E88E5' : '#BDDDF4'} />
          <path className={`map-zone ${selectedWeather === 'hot-dry' ? 'active' : ''}`} onClick={() => setSelectedWeather('hot-dry')} d="M80,100 L170,80 L180,180 L100,200 L60,150 Z" fill={selectedWeather === 'hot-dry' ? '#FFD700' : '#FFF9C4'} />
          <path className={`map-zone ${selectedWeather === 'hot-humid' ? 'active' : ''}`} onClick={() => setSelectedWeather('hot-humid')} d="M250,65 L320,100 L350,180 L280,250 L220,200 Z" fill={selectedWeather === 'hot-humid' ? '#E53935' : '#FFCDD2'} />
          <path className={`map-zone ${selectedWeather === 'moderate' ? 'active' : ''}`} onClick={() => setSelectedWeather('moderate')} d="M100,205 L185,185 L280,255 L200,420 L150,300 Z" fill={selectedWeather === 'moderate' ? '#43A047' : '#C8E6C9'} />
          <path className="map-boundary" d="M180,20 L250,60 L350,180 L200,420 L80,100 Z" fill="none" stroke="#e2e8f0" strokeWidth="2" />
        </svg>
      </div>

      <div className="weather-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {weatherOptions.map((opt) => (
          <div
            key={opt.id}
            className={`weather-card ${selectedWeather === opt.id ? 'active' : ''}`}
            onClick={() => setSelectedWeather(opt.id)}
            style={{
              padding: '16px',
              borderRadius: '24px',
              background: selectedWeather === opt.id ? 'var(--glass-bg)' : 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: selectedWeather === opt.id ? '2px solid var(--button-active)' : '1px solid var(--glass-border)',
              boxShadow: 'var(--card-shadow)',
              transition: 'all var(--transition-speed) ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className="icon-box" style={{ background: opt.bgColor, padding: '12px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {opt.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-text)' }}>{opt.name}</span>
                <span style={{ fontSize: '13px', color: 'var(--secondary-text)', fontWeight: '600' }}>{opt.zone}</span>
              </div>
            </div>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: selectedWeather === opt.id ? 'none' : '2px solid var(--button-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: selectedWeather === opt.id ? 'var(--button-active)' : 'transparent' }}>
              {selectedWeather === opt.id && <CheckCircle2 size={16} color="white" />}
            </div>
          </div>
        ))}
      </div>

      <ConfirmButton
        onClick={() => onConfirm(selectedWeather)}
      />
    </div>
  );
};

export default WeatherSelection;

