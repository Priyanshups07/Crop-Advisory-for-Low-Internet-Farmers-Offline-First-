import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Volume2, CheckCircle2, CloudOff, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const SymptomSelection = ({ crop, onBack, onConfirm }) => {
    const { t } = useTranslation();
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const symptomData = {
        rice: {
            title: t('symptomInfo.rice.title'),
            subtitle: t('symptomInfo.rice.subtitle'),
            helpText: t('symptomInfo.rice.helpText'),
            symptoms: [
                { id: 'brown-lesions', name: t('symptoms.brownLesions'), image: '/images/rice.png' },
                { id: 'yellowing', name: t('symptoms.yellowing'), image: '/images/rice.png' },
                { id: 'grey-spots', name: t('symptoms.greySpots'), image: '/images/rice.png' },
                { id: 'spindle', name: t('symptoms.spindle'), image: '/images/rice.png' },
                { id: 'healthy', name: t('symptoms.healthy'), image: '/images/rice.png', isHealthy: true },
            ]
        },
        wheat: {
            title: t('symptomInfo.wheat.title'),
            subtitle: t('symptomInfo.wheat.subtitle'),
            helpText: t('symptomInfo.wheat.helpText'),
            symptoms: [
                { id: 'brown-pustules', name: t('symptoms.brownPustules'), image: '/images/wheat/brown_pustules.jpg' },
                { id: 'powdery', name: t('symptoms.powdery'), image: '/images/wheat/powdery.jpg' },
                { id: 'brown-patches', name: t('symptoms.brownPatches'), image: '/images/wheat/brown_patches.png' },
                { id: 'white-powder', name: t('symptoms.whitePowder'), image: '/images/wheat/white_powder.jpg' },
                { id: 'stunted', name: t('symptoms.stunted'), image: '/images/wheat/stunted.jpg' },
                { id: 'healthy', name: t('symptoms.healthy'), image: '/images/wheat/healthy.jpg', isHealthy: true },
            ]
        },
        sugarcane: {
            title: t('symptomInfo.sugarcane.title'),
            subtitle: t('symptomInfo.sugarcane.subtitle'),
            helpText: t('symptomInfo.sugarcane.helpText'),
            symptoms: [
                { id: 'yellowing', name: t('symptoms.yellowing'), image: '/images/sugarcane/yellowing.jpg' },
                { id: 'drying-canes', name: t('symptoms.dryingCanes'), image: '/images/sugarcane/drying_canes.jpg' },
                { id: 'red-streaks', name: t('symptoms.redStreaks'), image: '/images/sugarcane/red_streaks.jpg' },
                { id: 'drying-stalks', name: t('symptoms.dryingStalks'), image: '/images/sugarcane/drying_stalks.jpg' },
                { id: 'black-smut', name: t('symptoms.blackSmut'), image: '/images/sugarcane/black_smut.jpg' },
                { id: 'healthy', name: t('symptoms.healthy'), image: '/images/sugarcane/healthy.jpg', isHealthy: true },
            ]
        },
        maize: {
            title: t('symptomInfo.maize.title'),
            subtitle: t('symptomInfo.maize.subtitle'),
            helpText: t('symptomInfo.maize.helpText'),
            symptoms: [
                { id: 'brown-pustules', name: t('symptoms.brownPustules'), image: '/images/maize/brown_pustules.jpg' },
                { id: 'white-growth', name: t('symptoms.whiteGrowth'), image: '/images/maize/white_growth.jpg' },
                { id: 'gray-lesions', name: t('symptoms.gray_lesions.png') },
                { id: 'healthy', name: t('symptoms.healthy'), image: '/images/maize/healthy.jpg', isHealthy: true },
            ]
        }
    };

    const currentData = symptomData[crop.toLowerCase()] || symptomData.rice;

    const toggleSymptom = (id) => {
        setSelectedSymptoms(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            } else {
                if (id === 'healthy') return ['healthy'];
                return [...prev.filter(item => item !== 'healthy'), id];
            }
        });
    };

    return (
        <div className="app-container symptom-step">
            <div className="top-nav">
                <button className="back-btn" onClick={onBack}>
                    <ArrowLeft size={24} />
                </button>
                <div className="offline-banner" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <LanguageSwitcher />
                    <CloudOff size={16} />
                    <span>{t('offlineReady')}</span>
                </div>
            </div>

            <div className="header-section">
                <h1>{currentData.title}</h1>
                <p className="subtitle">{currentData.subtitle}</p>
            </div>

            <div className="crop-grid">
                {currentData.symptoms.map((symptom) => (
                    <div
                        key={symptom.id}
                        className={`crop-card ${selectedSymptoms.includes(symptom.id) ? 'selected' : ''}`}
                        onClick={() => toggleSymptom(symptom.id)}
                    >
                        <div className="image-wrapper">
                            <img src={symptom.image} alt={symptom.name} />
                        </div>
                        <div className="card-info">
                            <span className="name">{symptom.name}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedSymptoms.length > 0 && (
                <div className="selected-summary" style={{ marginTop: '16px', padding: '20px', backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', backdropFilter: 'blur(8px)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--secondary-text)', letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>{t('prompts.selectedSymptoms')}</h3>
                    {selectedSymptoms.map(id => {
                        const sym = currentData.symptoms.find(s => s.id === id);
                        return (
                            <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ background: 'var(--button-active)', width: '6px', height: '6px', borderRadius: '50%' }} />
                                    <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--primary-text)' }}>{sym?.name}</span>
                                </div>
                                <CheckCircle2 size={16} color="var(--accent-green-text)" />
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="button-container">
                <button
                    className="confirm-btn primary"
                    disabled={selectedSymptoms.length === 0}
                    onClick={() => onConfirm(selectedSymptoms)}
                >
                    {t('continue')} <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default SymptomSelection;
