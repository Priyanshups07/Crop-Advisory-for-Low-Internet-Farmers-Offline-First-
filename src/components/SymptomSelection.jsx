import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ConfirmButton from './ConfirmButton';

const SymptomSelection = ({ crop, onConfirm }) => {
    const { t } = useTranslation();
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const symptomData = {
        rice: {
            title: t('symptomInfo.rice.title'),
            subtitle: t('symptomInfo.rice.subtitle'),
            helpText: t('symptomInfo.rice.helpText'),
            symptoms: [
                { id: 'brown-lesions', name: t('symptoms.brownLesions'), image: 'https://images.unsplash.com/photo-1535242208474-9a28972a0c40?q=80&w=600&auto=format&fit=crop' },
                { id: 'yellowing', name: t('symptoms.yellowing'), image: 'https://images.unsplash.com/photo-1628172901320-c24095493019?q=80&w=600&auto=format&fit=crop' },
                { id: 'grey-spots', name: t('symptoms.greySpots'), image: 'https://images.unsplash.com/photo-1594750801824-f773347b973c?q=80&w=600&auto=format&fit=crop' },
                { id: 'spindle', name: t('symptoms.spindle'), image: 'https://images.unsplash.com/photo-1643906663554-f58c49e25d2c?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: t('symptoms.healthy'), image: 'https://images.unsplash.com/photo-1536633310197-080f5d729863?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        },
        wheat: {
            title: t('symptomInfo.wheat.title'),
            subtitle: t('symptomInfo.wheat.subtitle'),
            helpText: t('symptomInfo.wheat.helpText'),
            symptoms: [
                { id: 'brown-pustules', name: t('symptoms.brownPustules'), image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600&auto=format&fit=crop' },
                { id: 'powdery', name: t('symptoms.powdery'), image: 'https://images.unsplash.com/photo-1501430654243-c936ceaaf399?q=80&w=600&auto=format&fit=crop' },
                { id: 'brown-patches', name: t('symptoms.brownPatches'), image: 'https://images.unsplash.com/photo-1444858291040-5897ea3997e7?q=80&w=600&auto=format&fit=crop' },
                { id: 'white-powder', name: t('symptoms.whitePowder'), image: 'https://images.unsplash.com/photo-1473071538314-bc487fa44b67?q=80&w=600&auto=format&fit=crop' },
                { id: 'stunted', name: t('symptoms.stunted'), image: 'https://images.unsplash.com/photo-1591901140938-f9b87df8ebf2?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: t('symptoms.healthy'), image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        },
        sugarcane: {
            title: t('symptomInfo.sugarcane.title'),
            subtitle: t('symptomInfo.sugarcane.subtitle'),
            helpText: t('symptomInfo.sugarcane.helpText'),
            symptoms: [
                { id: 'yellowing', name: t('symptoms.yellowing'), image: 'https://images.unsplash.com/photo-1636181656885-ad78c257329d?q=80&w=600&auto=format&fit=crop' },
                { id: 'drying-canes', name: t('symptoms.dryingCanes'), image: 'https://images.unsplash.com/photo-1622329241584-699a22d3e121?q=80&w=600&auto=format&fit=crop' },
                { id: 'red-streaks', name: t('symptoms.redStreaks'), image: 'https://images.unsplash.com/photo-1650192388648-65800ec59fee?q=80&w=600&auto=format&fit=crop' },
                { id: 'drying-stalks', name: t('symptoms.dryingStalks'), image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop' },
                { id: 'black-smut', name: t('symptoms.blackSmut'), image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: t('symptoms.healthy'), image: 'https://images.unsplash.com/photo-1622329241584-699a22d3e121?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        },
        maize: {
            title: t('symptomInfo.maize.title'),
            subtitle: t('symptomInfo.maize.subtitle'),
            helpText: t('symptomInfo.maize.helpText'),
            symptoms: [
                { id: 'brown-pustules', name: t('symptoms.brownPustules'), image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop' },
                { id: 'white-growth', name: t('symptoms.whiteGrowth'), image: 'https://images.unsplash.com/photo-1543362906-acfc16c623a2?q=80&w=600&auto=format&fit=crop' },
                { id: 'gray-lesions', name: t('symptoms.grayLesions'), image: 'https://images.unsplash.com/photo-1590634158913-90d5757d23d8?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: t('symptoms.healthy'), image: 'https://images.unsplash.com/photo-1528650047-92a0618037a1?q=80&w=600&auto=format&fit=crop', isHealthy: true },
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
        <div className="symptom-step">
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

            <ConfirmButton
                disabled={selectedSymptoms.length === 0}
                onClick={() => onConfirm(selectedSymptoms)}
            />
        </div>
    );
};

export default SymptomSelection;

