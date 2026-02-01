import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Volume2, CheckCircle2, CloudOff, Info } from 'lucide-react';

const SymptomSelection = ({ crop, onBack, onConfirm }) => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const symptomData = {
        rice: {
            title: "Rice Symptom Selection",
            subtitle: "Select the symptoms you see",
            helpText: "Tap the speaker for audio help",
            symptoms: [
                { id: 'brown-lesions', name: 'Brown Lesions', image: 'https://images.unsplash.com/photo-1535242208474-9a28972a0c40?q=80&w=600&auto=format&fit=crop' },
                { id: 'yellowing', name: 'Yellowing Leaves', image: 'https://images.unsplash.com/photo-1628172901320-c24095493019?q=80&w=600&auto=format&fit=crop' },
                { id: 'grey-spots', name: 'Grey Spots', image: 'https://images.unsplash.com/photo-1594750801824-f773347b973c?q=80&w=600&auto=format&fit=crop' },
                { id: 'spindle', name: 'Spindle Shape', image: 'https://images.unsplash.com/photo-1643906663554-f58c49e25d2c?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: 'No Visible Symptoms', image: 'https://images.unsplash.com/photo-1536633310197-080f5d729863?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        },
        wheat: {
            title: "Wheat Diagnosis",
            subtitle: "What do you see?",
            helpText: "Select all symptoms visible on the plant.",
            symptoms: [
                { id: 'brown-pustules', name: 'Reddish brown pustules', image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600&auto=format&fit=crop' },
                { id: 'powdery', name: 'Powdery coating', image: 'https://images.unsplash.com/photo-1501430654243-c936ceaaf399?q=80&w=600&auto=format&fit=crop' },
                { id: 'brown-patches', name: 'Irregular brown patches', image: 'https://images.unsplash.com/photo-1444858291040-5897ea3997e7?q=80&w=600&auto=format&fit=crop' },
                { id: 'white-powder', name: 'White powder spots', image: 'https://images.unsplash.com/photo-1473071538314-bc487fa44b67?q=80&w=600&auto=format&fit=crop' },
                { id: 'stunted', name: 'Stunted growth', image: 'https://images.unsplash.com/photo-1591901140938-f9b87df8ebf2?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: 'No visible symptoms', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        },
        sugarcane: {
            title: "What do you see?",
            subtitle: "Tap all the symptoms that apply to your crop",
            helpText: "",
            symptoms: [
                { id: 'yellowing', name: 'Yellowing leaves', image: 'https://images.unsplash.com/photo-1636181656885-ad78c257329d?q=80&w=600&auto=format&fit=crop' },
                { id: 'drying-canes', name: 'Drying canes', image: 'https://images.unsplash.com/photo-1622329241584-699a22d3e121?q=80&w=600&auto=format&fit=crop' },
                { id: 'red-streaks', name: 'Red streaks', image: 'https://images.unsplash.com/photo-1650192388648-65800ec59fee?q=80&w=600&auto=format&fit=crop' },
                { id: 'drying-stalks', name: 'Drying stalks', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop' },
                { id: 'black-smut', name: 'Black smut', image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: 'Healthy / None', image: 'https://images.unsplash.com/photo-1622329241584-699a22d3e121?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        },
        maize: {
            title: "Maize Symptoms",
            subtitle: "What do you see on your corn?",
            helpText: "Select all that apply to your crop.",
            symptoms: [
                { id: 'brown-pustules', name: 'Brown pustules', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop' },
                { id: 'white-growth', name: 'White growth', image: 'https://images.unsplash.com/photo-1543362906-acfc16c623a2?q=80&w=600&auto=format&fit=crop' },
                { id: 'gray-lesions', name: 'Gray lesions', image: 'https://images.unsplash.com/photo-1590634158913-90d5757d23d8?q=80&w=600&auto=format&fit=crop' },
                { id: 'healthy', name: 'Healthy / None', image: 'https://images.unsplash.com/photo-1528650047-92a0618037a1?q=80&w=600&auto=format&fit=crop', isHealthy: true },
            ]
        }
    };

    const currentData = symptomData[crop.toLowerCase()] || symptomData.rice;

    const toggleSymptom = (id) => {
        setSelectedSymptoms(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            } else {
                // If selecting healthy, deselect others. If selecting disease, deselect healthy.
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
                <div className="offline-banner">
                    <CloudOff size={16} />
                    <span>OFFLINE-READY</span>
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
                    <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--secondary-text)', letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Selected Symptoms</h3>
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
                    CONTINUE <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default SymptomSelection;
