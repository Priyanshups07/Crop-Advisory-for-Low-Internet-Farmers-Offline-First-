import React from 'react';
import { CheckCircle2, Volume2, Scissors, SprayCan as Spray, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import speak from '../utils/speech';
import ConfirmButton from './ConfirmButton';

import diseaseRice from '../assets/diagnosis/disease_rice.svg';
import diseaseWheat from '../assets/diagnosis/disease_wheat.svg';
import diseaseDefault from '../assets/diagnosis/disease_default.svg';
import treatmentSpray from '../assets/treatment/treatment_spray.svg';
import treatmentPrune from '../assets/treatment/treatment_prune.svg';

const DiagnosisResult = ({ crop, onConfirm }) => {
  const { t, i18n } = useTranslation();


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
      image: isKnown && cropKey === 'rice' ? diseaseRice :
        isKnown && cropKey === 'wheat' ? diseaseWheat :
          diseaseDefault,
      treatment: t(`${key}.treatment`),
      frequency: t(`${key}.frequency`),
      // Construct steps manually or fetch object if using i18next backend that supports it
      steps: [
        {
          id: 1, name: t(`${key}.steps.spray`) || t(`${key}.steps.dust`) || t(`${key}.steps.mix`),
          image: treatmentSpray,
          icon: <Spray size={16} />
        },
        {
          id: 2, name: t(`${key}.steps.prune`) || t(`${key}.steps.remove`) || t(`${key}.steps.water`),
          image: treatmentPrune,
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
    <div className="diagnosis-result-step">
      <div className="result-hero" style={{ height: '320px', position: 'relative', marginTop: '-24px', marginLeft: '-24px', marginRight: '-24px' }}>
        <img src={data.image} alt={data.disease} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ padding: '0', position: 'relative', marginTop: '-40px', background: 'var(--bg-color)', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', zIndex: 1 }}>
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
              <CheckCircle size={16} color="var(--accent-green-text)" />
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

        <ConfirmButton
          label={t('finish') || 'FINISH'}
          icon={CheckCircle2}
          onClick={onConfirm}
        />
      </div>
    </div>


  );
};

export default DiagnosisResult;
