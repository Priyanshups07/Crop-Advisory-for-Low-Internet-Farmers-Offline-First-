import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Volume2, Scissors, SprayCan as Spray, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import speak from '../utils/speech';
import LanguageSwitcher from './LanguageSwitcher';

const DiagnosisResult = ({ crop, symptoms, onBack, onConfirm }) => {
  const { t, i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);

  /*
    Since "diagnosis" in en.json is an object with keys: rice, wheat, default, etc.
    we can use t('diagnosis', { returnObjects: true }) to get the whole object, 
    OR fetch specific keys.
    However, structured objects like 'steps' need careful handling if we want to iterate.
    Let's rely on constructing the data object dynamically from keys.
  */

  const getResultData = (cropKey) => {
    const baseKey = `diagnosis.${cropKey}`;
    // check if key exists by checking title or similar. 
    // i18next returns key if missing, so we might need a better check or just default to 'default'.
    // For simplicity, we assume if crop is one of our known ones, it exists.
    const isKnown = ['rice', 'wheat'].includes(cropKey);
    const key = isKnown ? baseKey : 'diagnosis.default';

    return {
      disease: t(`${key}.disease`),
      image: isKnown && cropKey === 'rice' ? 'https://images.unsplash.com/photo-1536633310197-080f5d729863?q=80&w=800&auto=format&fit=crop' :
        isKnown && cropKey === 'wheat' ? 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop' :
          'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
      treatment: t(`${key}.treatment`),
      frequency: t(`${key}.frequency`),
      // Construct steps manually or fetch object if using i18next backend that supports it
      steps: [
        {
          id: 1, name: t(`${key}.steps.spray`) || t(`${key}.steps.dust`) || t(`${key}.steps.mix`),
          image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=400&auto=format&fit=crop',
          icon: <Spray size={16} />
        },
        {
          id: 2, name: t(`${key}.steps.prune`) || t(`${key}.steps.remove`) || t(`${key}.steps.water`),
          image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=400&auto=format&fit=crop',
          icon: <Scissors size={16} />
        }
      ]
    };
  };

  const data = getResultData(crop.toLowerCase());

  /*
    Using our robust speak utility which handles language selection
  */
  const handleSpeak = () => {
    // Construct text in current language
    const textToSpeak = `${t('prompts.detected')}: ${data.disease}. ${t('prompts.treatment')}: ${data.treatment}. ${data.frequency}`;
    speak(textToSpeak, i18n.language || 'en');
  };

  return (
    <div className="app-container diagnosis-result-step" style={{ padding: 0 }}>
      <div className="top-nav" style={{ position: 'absolute', top: '24px', left: '24px', right: '24px', zIndex: 10 }}>
        <button className="back-btn" onClick={onBack} style={{ background: 'white', borderRadius: '50%', padding: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <ArrowLeft size={24} color="var(--primary-text)" />
        </button>
        <div className="offline-banner" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LanguageSwitcher />
          <ShieldCheck size={16} />
          <span>{t('offlineReady')}</span>
        </div>
      </div>

      <div className="result-hero" style={{ height: '320px', position: 'relative' }}>
        <img src={data.image} alt={data.disease} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ padding: '24px', position: 'relative', marginTop: '-40px', background: 'var(--bg-color)', borderTopLeftRadius: '40px', borderTopRightRadius: '40px' }}>
        <div className="result-header-card" style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--card-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--glass-border)' }}>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#00E676', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('prompts.detected')}</span>
            <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--primary-text)', margin: '4px 0 0 0' }}>{data.disease}</h1>
          </div>
          <button onClick={handleSpeak} style={{ backgroundColor: 'var(--button-active)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(26,57,36,0.2)', cursor: 'pointer' }}>
            <Volume2 size={24} />
          </button>
        </div>

        <div className="treatment-section" style={{ marginTop: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ background: 'var(--accent-green)', width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={16} color="var(--accent-green-text)" />
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-text)' }}>{t('prompts.treatment')}</h2>
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
            {t('continue')} <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResult;
