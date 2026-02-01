import React from 'react';
import { ArrowLeft, Play, LayoutGrid, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ActionDetails = ({ onBack, onDone }) => {
  const { t } = useTranslation();
  return (
    <div className="app-container action-details-step">
      <div className="top-nav">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="offline-banner">
          <ShieldCheck size={16} />
          <span>{t('offlineReady')}</span>
        </div>
      </div>

      <div className="header-section">
        <h1>Action Details</h1>
        <p className="subtitle">Practical steps for your field</p>
      </div>

      <div className="action-card-main">
        <div className="illustration-wrapper">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop"
            alt="Farmer applying fertilizer"
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '32px', border: '1px solid var(--glass-border)' }}
          />
        </div>

        <div className="action-content" style={{ padding: '24px 0' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--primary-text)', marginBottom: '16px' }}>Apply Organic Fertilizer</h2>

          <button className="audio-player-btn" style={{ background: 'var(--button-active)', borderRadius: '24px' }}>
            <div className="play-icon-wrapper" style={{ color: 'var(--button-active)' }}>
              <Play size={24} fill="currentColor" />
            </div>
            <div className="audio-text">
              <span className="title" style={{ fontSize: '18px', fontWeight: '800' }}>Listen Now</span>
              <span className="subtitle" style={{ fontSize: '13px', opacity: 0.8 }}>Hear how to do this</span>
            </div>
          </button>
        </div>
      </div>

      <div className="why-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{ background: 'var(--button-active)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>?</span>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-text)' }}>Why do this?</h3>
        </div>

        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="benefit-card" style={{ boxShadow: 'var(--card-shadow)', border: '1px solid var(--glass-border)' }}>
            <div className="benefit-icon-box" style={{ background: 'var(--accent-green)' }}>
              <LayoutGrid size={24} color="var(--accent-green-text)" />
            </div>
            <span className="benefit-title">Healthy Plants</span>
            <span className="benefit-desc">More nutrients</span>
          </div>

          <div className="benefit-card" style={{ boxShadow: 'var(--card-shadow)', border: '1px solid var(--glass-border)' }}>
            <div className="benefit-icon-box" style={{ background: 'var(--accent-green)' }}>
              <TrendingUp size={24} color="var(--accent-green-text)" />
            </div>
            <span className="benefit-title">Bigger Harvest</span>
            <span className="benefit-desc">Earn more money</span>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="confirm-btn primary" onClick={onDone}>
          FINISH <CheckCircle2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default ActionDetails;
