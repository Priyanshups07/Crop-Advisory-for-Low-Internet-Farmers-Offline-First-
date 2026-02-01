import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Volume2, Scissors, SprayCan as Spray, ArrowRight } from 'lucide-react';

const DiagnosisResult = ({ crop, symptoms, onBack, onConfirm }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Mock result mapping based on crop
    const results = {
        rice: {
            disease: "Rice Blast",
            image: "https://images.unsplash.com/photo-1536633310197-080f5d729863?q=80&w=800&auto=format&fit=crop",
            treatment: "Apply Organic Neem Spray",
            frequency: "Spray twice a day until clear",
            steps: [
                { id: 1, name: "SPRAY EVENLY", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=400&auto=format&fit=crop", icon: <Spray size={16} /> },
                { id: 2, name: "PRUNE LEAVES", image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=400&auto=format&fit=crop", icon: <Scissors size={16} /> }
            ]
        },
        wheat: {
            disease: "Powdery Mildew",
            image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
            treatment: "Sulfur Dusting",
            frequency: "Apply weekly in dry conditions",
            steps: [
                { id: 1, name: "DUST EVENLY", image: "https://images.unsplash.com/photo-1591901140938-f9b87df8ebf2?q=80&w=400&auto=format&fit=crop" },
                { id: 2, name: "REMOVE DEBRIS", image: "https://images.unsplash.com/photo-1444858291040-5897ea3997e7?q=80&w=400&auto=format&fit=crop" }
            ]
        },
        default: {
            disease: "General Nutrient Deficiency",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
            treatment: "Balanced Organic Fertilizer",
            frequency: "Apply once immediately",
            steps: [
                { id: 1, name: "MIX PROPERLY", image: "https://images.unsplash.com/photo-1628172901320-c24095493019?q=80&w=400&auto=format&fit=crop" },
                { id: 2, name: "WATER WELL", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400&auto=format&fit=crop" }
            ]
        }
    };

    const data = results[crop.toLowerCase()] || results.default;

    const speak = () => {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            const text = `Detected Result: ${data.disease}. Treatment: ${data.treatment}. Frequency: ${data.frequency}`;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="app-container diagnosis-result-step" style={{ padding: 0 }}>
            {/* Header with Back Button */}
            <div className="top-nav" style={{ position: 'absolute', top: '24px', left: '24px', right: '24px', zIndex: 10, justifyContent: 'flex-start' }}>
                <button className="back-btn" onClick={onBack} style={{ background: 'white', borderRadius: '50%', padding: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <ArrowLeft size={24} color="var(--primary-text)" />
                </button>
            </div>

            <div className="result-hero" style={{ height: '320px', position: 'relative' }}>
                <img src={data.image} alt={data.disease} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ padding: '24px', position: 'relative', marginTop: '-40px', background: 'var(--bg-color)', borderTopLeftRadius: '40px', borderTopRightRadius: '40px' }}>
                <div className="result-header-card" style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--card-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--glass-border)' }}>
                    <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#00E676', letterSpacing: '1px', textTransform: 'uppercase' }}>Detected Result</span>
                        <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--primary-text)', margin: '4px 0 0 0' }}>{data.disease}</h1>
                    </div>
                    <button
                        onClick={speak}
                        disabled={isSpeaking}
                        style={{ backgroundColor: 'var(--button-active)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(26,57,36,0.2)', cursor: 'pointer', opacity: isSpeaking ? 0.7 : 1 }}
                    >
                        <Volume2 size={24} />
                    </button>
                </div>

                <div className="treatment-section" style={{ marginTop: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <div style={{ background: 'var(--accent-green)', width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CheckCircle2 size={16} color="var(--accent-green-text)" />
                        </div>
                        <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-text)' }}>Treatment Advice</h2>
                    </div>

                    <div className="treatment-overview" style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--card-shadow)', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-text)' }}>{data.treatment}</h3>
                        <p style={{ color: 'var(--secondary-text)', fontWeight: '600', fontSize: '14px', marginTop: '4px' }}>{data.frequency}</p>

                        <div className="steps-row" style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                            {data.steps.map(step => (
                                <div key={step.id} style={{ flex: 1 }}>
                                    <div style={{ position: 'relative', height: '100px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                        <img src={step.image} alt={step.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary-text)', marginTop: '8px', display: 'block', textTransform: 'uppercase' }}>{step.id}. {step.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="button-container">
                    <button className="confirm-btn primary" onClick={onConfirm}>
                        CONTINUE <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiagnosisResult;
