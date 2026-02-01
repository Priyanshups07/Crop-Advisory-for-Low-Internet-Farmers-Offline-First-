import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ConfirmButton from './ConfirmButton';

// Rice Symptoms
import riceBrownLesions from '../assets/symptoms/rice_brown_lesions_1769924116559.png';
import riceYellowing from '../assets/symptoms/rice_yellowing_1769924144018.png';
import riceGreySpots from '../assets/symptoms/rice_grey_spots_1769924169596.png';
import riceSpindle from '../assets/symptoms/rice_spindle_1769924199783.png';
import riceHealthy from '../assets/symptoms/rice_healthy_1769924225784.png';

// Wheat Symptoms
import wheatBrownPustules from '../assets/symptoms/wheat_brown_pustules_1769924256373.png';
import wheatPowdery from '../assets/symptoms/wheat_powdery.svg';
import wheatBrownPatches from '../assets/symptoms/wheat_brown_patches.svg';
import wheatWhitePowder from '../assets/symptoms/wheat_white_powder.svg';
import wheatStunted from '../assets/symptoms/wheat_stunted.svg';
import wheatHealthy from '../assets/symptoms/wheat_healthy.svg';

// Sugarcane Symptoms
import sugarcaneYellowing from '../assets/symptoms/sugarcane_yellowing.svg';
import sugarcaneDryingCanes from '../assets/symptoms/sugarcane_drying_canes.svg';
import sugarcaneRedStreaks from '../assets/symptoms/sugarcane_red_streaks.svg';
import sugarcaneDryingStalks from '../assets/symptoms/sugarcane_drying_stalks.svg';
import sugarcaneBlackSmut from '../assets/symptoms/sugarcane_black_smut.svg';
import sugarcaneHealthy from '../assets/symptoms/sugarcane_healthy.svg';

// Maize Symptoms
import maizeBrownPustules from '../assets/symptoms/maize_brown_pustules.svg';
import maizeWhiteGrowth from '../assets/symptoms/maize_white_growth.svg';
import maizeGrayLesions from '../assets/symptoms/maize_gray_lesions.svg';
import maizeHealthy from '../assets/symptoms/maize_healthy.svg';

const SymptomSelection = ({ crop, onConfirm }) => {
    const { t } = useTranslation();
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const symptomData = {
        rice: {
            title: t('symptomInfo.rice.title'),
            subtitle: t('symptomInfo.rice.subtitle'),
            helpText: t('symptomInfo.rice.helpText'),
            symptoms: [
                { id: 'brown-lesions', name: t('symptoms.brownLesions'), image: riceBrownLesions },
                { id: 'yellowing', name: t('symptoms.yellowing'), image: riceYellowing },
                { id: 'grey-spots', name: t('symptoms.greySpots'), image: riceGreySpots },
                { id: 'spindle', name: t('symptoms.spindle'), image: riceSpindle },
                { id: 'healthy', name: t('symptoms.healthy'), image: riceHealthy, isHealthy: true },
            ]
        },
        wheat: {
            title: t('symptomInfo.wheat.title'),
            subtitle: t('symptomInfo.wheat.subtitle'),
            helpText: t('symptomInfo.wheat.helpText'),
            symptoms: [
                { id: 'brown-pustules', name: t('symptoms.brownPustules'), image: wheatBrownPustules },
                { id: 'powdery', name: t('symptoms.powdery'), image: wheatPowdery },
                { id: 'brown-patches', name: t('symptoms.brownPatches'), image: wheatBrownPatches },
                { id: 'white-powder', name: t('symptoms.whitePowder'), image: wheatWhitePowder },
                { id: 'stunted', name: t('symptoms.stunted'), image: wheatStunted },
                { id: 'healthy', name: t('symptoms.healthy'), image: wheatHealthy, isHealthy: true },
            ]
        },
        sugarcane: {
            title: t('symptomInfo.sugarcane.title'),
            subtitle: t('symptomInfo.sugarcane.subtitle'),
            helpText: t('symptomInfo.sugarcane.helpText'),
            symptoms: [
                { id: 'yellowing', name: t('symptoms.yellowing'), image: sugarcaneYellowing },
                { id: 'drying-canes', name: t('symptoms.dryingCanes'), image: sugarcaneDryingCanes },
                { id: 'red-streaks', name: t('symptoms.redStreaks'), image: sugarcaneRedStreaks },
                { id: 'drying-stalks', name: t('symptoms.dryingStalks'), image: sugarcaneDryingStalks },
                { id: 'black-smut', name: t('symptoms.blackSmut'), image: sugarcaneBlackSmut },
                { id: 'healthy', name: t('symptoms.healthy'), image: sugarcaneHealthy, isHealthy: true },
            ]
        },
        maize: {
            title: t('symptomInfo.maize.title'),
            subtitle: t('symptomInfo.maize.subtitle'),
            helpText: t('symptomInfo.maize.helpText'),
            symptoms: [
                { id: 'brown-pustules', name: t('symptoms.brownPustules'), image: '/images/maize/brown_pustules.jpg' },
                { id: 'white-growth', name: t('symptoms.whiteGrowth'), image: '/images/maize/white_growth.jpg' },
                { id: 'gray-lesions', name: t('symptoms.grayLesions'), image: '/images/maize/gray_lesions.png' },
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
                <div className="selected-summary" style={{ marginTop: '12px', padding: '16px', backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', backdropFilter: 'blur(8px)' }}>
                    <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--secondary-text)', letterSpacing: '1px', marginBottom: '8px', textTransform: 'uppercase' }}>{t('prompts.selectedSymptoms')}</h3>
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
