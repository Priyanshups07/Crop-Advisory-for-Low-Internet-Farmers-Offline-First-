import React from 'react';
import { ArrowLeft, Play, LayoutGrid, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';

const ActionDetails = ({ onBack, onDone }) => {
    return (
        <div className="app-container action-details-step">
            <div className="top-nav">
                <button className="back-btn" onClick={onBack}>
                    <ArrowLeft size={24} />
                </button>
                <span className="page-title" style={{ fontWeight: '800' }}>Action Details</span>
                <div className="offline-banner" style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                    <ShieldCheck size={16} />
                    <span>OFFLINE-READY</span>
                </div>
            </div>

            <div className="action-card-main" style={{ marginTop: '24px' }}>
                <div className="illustration-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop"
                        alt="Farmer applying fertilizer"
                        style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px' }}
                    />
                </div>

                <div className="action-content" style={{ padding: '24px 0' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1a202c', marginBottom: '20px' }}>Apply Organic Fertilizer</h1>

                    <button className="audio-player-btn">
                        <div className="play-icon-wrapper">
                            <Play size={24} fill="currentColor" />
                        </div>
                        <div className="audio-text">
                            <span className="title">Listen Now</span>
                            <span className="subtitle">Hear how to do this</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="why-section" style={{ marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <div style={{ background: '#00E676', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>?</span>
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1a202c' }}>Why do this?</h2>
                </div>

                <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="benefit-card">
                        <div className="benefit-icon-box" style={{ background: '#E8F5E9' }}>
                            <LayoutGrid size={24} color="#2E7D32" fill="#E8F5E9" />
                        </div>
                        <span className="benefit-title">Healthy Plants</span>
                        <span className="benefit-desc">More nutrients</span>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon-box" style={{ background: '#E8F5E9' }}>
                            <TrendingUp size={24} color="#2E7D32" />
                        </div>
                        <span className="benefit-title">Bigger Harvest</span>
                        <span className="benefit-desc">Earn more money</span>
                    </div>
                </div>
            </div>

            <div className="button-container" style={{ marginTop: 'auto', padding: '32px 0' }}>
                <button className="confirm-btn primary" onClick={onDone} style={{ backgroundColor: '#00E676', color: 'white' }}>
                    <CheckCircle2 size={24} style={{ marginRight: '12px' }} />
                    DONE
                </button>
            </div>
        </div>
    );
};

export default ActionDetails;
