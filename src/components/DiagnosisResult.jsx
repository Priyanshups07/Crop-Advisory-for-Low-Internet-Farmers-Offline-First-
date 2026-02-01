import React, { useMemo } from 'react';
import { CheckCircle2, Volume2, Scissors, SprayCan as Spray, CheckCircle, Info, Thermometer, Droplets, Wind, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import speak from '../utils/speech';
import ConfirmButton from './ConfirmButton';
import TopBanner from './TopBanner';
import { rules_full } from '../rules';

const DiagnosisResult = ({ crop, stage, soil, moisture, weather, symptoms, onBack, onConfirm }) => {
  const { t, i18n } = useTranslation();

  // Find the best match from the rules database
  const diagnosis = useMemo(() => {
    if (!crop) return null;

    // Convert app values to match JSON format
    const cropVal = crop.charAt(0).toUpperCase() + crop.slice(1);
    const stageVal = { sprout: 'Planting', grow: 'Vegetative', flower: 'Flowering', mature: 'Maturity' }[stage] || 'Vegetative';
    const soilVal = soil ? soil.charAt(0).toUpperCase() + soil.slice(1) : 'Loam';

    const weatherMap = {
      'hot-dry': 'Hot-Dry',
      'hot-humid': 'Hot-Humid',
      'cold': 'Cool-Dry',
      'moderate': 'Cool-Humid'
    };
    const weatherVal = weatherMap[weather] || 'Cool-Humid';

    // Filter rules by crop
    const cropRules = rules_full.filter(r => r.crop === cropVal);

    // Simple scoring system for matching
    let bestMatch = null;
    let highestScore = -1;

    // We also want to match based on the symptoms selected
    // Since rules_full doesn't always have a 'symptoms' string that matches our IDs, 
    // we use a simplified disease lookup if possible, or just the best environmental match.

    for (const rule of cropRules) {
      let score = 0;
      if (rule.growth_stage === stageVal) score += 3;
      if (rule.soil_type === soilVal) score += 1;
      if (rule.weather_condition === weatherVal) score += 2;

      // If we have "Healthy" selected as the only symptom, favor healthy results
      if (symptoms.includes('healthy') && rule.detected_disease === 'Healthy') score += 10;
      if (!symptoms.includes('healthy') && rule.detected_disease === 'Healthy') score -= 5;

      if (score > highestScore) {
        highestScore = score;
        bestMatch = rule;
      }
    }

    // Fallback if no rules found for crop
    if (!bestMatch) {
      return {
        disease: t(`diagnosis.${crop}.disease`) || 'Unknown Issue',
        treatment: t(`diagnosis.${crop}.treatment`) || 'Consult local expert',
        frequency: t(`diagnosis.${crop}.frequency`) || 'As needed',
        steps: ['spray', 'remove']
      };
    }

    // Determine steps based on advisory action
    let steps = ['spray', 'remove'];
    const action = (bestMatch.advisory_action || '').toLowerCase();
    if (action.includes('irrigation') || action.includes('water')) steps = ['water', 'check'];
    if (action.includes('fungicide') || action.includes('spray')) steps = ['spray', 'remove'];
    if (action.includes('drainage')) steps = ['drain', 'prune'];
    if (action.includes('fertilizer') || action.includes('nutrient')) steps = ['mix', 'water'];
    if (bestMatch.detected_disease === 'Healthy') steps = ['check', 'water'];

    return {
      disease: i18n.language === 'hi' ? (bestMatch.detected_disease_hi || bestMatch.detected_disease) : bestMatch.detected_disease,
      treatment: i18n.language === 'hi' ? (bestMatch.advisory_action_hi || bestMatch.advisory_action) : bestMatch.advisory_action,
      frequency: t(`diagnosis.${crop}.frequency`) || 'Daily monitoring recommended',
      steps: steps
    };
  }, [crop, stage, soil, moisture, weather, symptoms, i18n.language, t]);

  const images = {
    rice: '/images/rice.png',
    wheat: '/images/wheat/healthy.jpg',
    sugarcane: '/images/sugarcane/healthy.jpg',
    maize: '/images/maize/healthy.jpg',
    default: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop'
  };

  const handleSpeak = () => {
    if (!diagnosis) return;
    const textToSpeak = `${t('prompts.detected')}: ${diagnosis.disease}. ${t('prompts.treatment')}: ${diagnosis.treatment}. ${diagnosis.frequency}`;
    speak(textToSpeak, i18n.language || 'en');
  };

  if (!diagnosis) return null;

  return (
    <div className="diagnosis-result-step" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px' }}>
        <TopBanner onBack={onBack} />
      </div>

      <div className="result-hero" style={{ height: '180px', position: 'relative', marginTop: '-16px' }}>
        <img src={images[crop] || images.default} alt={diagnosis.disease} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(transparent, var(--bg-color))' }} />
      </div>

      <div className="app-container" style={{ marginTop: '-40px', position: 'relative', zIndex: 1, flex: 1, paddingBottom: '100px' }}>
        <div className="result-header-card" style={{ background: 'white', padding: '16px 20px', borderRadius: '24px', boxShadow: 'var(--card-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--glass-border)' }}>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: '#00E676', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('prompts.detected')}</span>
            <h1 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--primary-text)', margin: '2px 0 0 0' }}>{diagnosis.disease}</h1>
          </div>
          <button onClick={handleSpeak} style={{ backgroundColor: 'var(--button-active)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(26,57,36,0.2)', cursor: 'pointer' }}>
            <Volume2 size={24} />
          </button>
        </div>

        <div className="stats-row" style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <div style={{ flex: 1, background: 'var(--glass-bg)', padding: '12px', borderRadius: '16px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#E3F2FD', padding: '6px', borderRadius: '8px' }}>
              <Sprout size={14} color="#1565C0" />
            </div>
            <div>
              <span style={{ fontSize: '9px', color: 'var(--secondary-text)', display: 'block' }}>{t('steps.growth')}</span>
              <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary-text)' }}>{t(`stages.${stage}`)}</span>
            </div>
          </div>
          <div style={{ flex: 1, background: 'var(--glass-bg)', padding: '12px', borderRadius: '16px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#FFF3E0', padding: '6px', borderRadius: '8px' }}>
              <Droplets size={14} color="#E65100" />
            </div>
            <div>
              <span style={{ fontSize: '9px', color: 'var(--secondary-text)', display: 'block' }}>{t('steps.moisture')}</span>
              <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary-text)' }}>{t(`moisture.${moisture}`)}</span>
            </div>
          </div>
        </div>

        <div className="treatment-section" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ background: 'var(--accent-green)', width: '24px', height: '24px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle size={14} color="var(--accent-green-text)" />
            </div>
            <h2 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--primary-text)' }}>{t('prompts.treatment')}</h2>
          </div>

          <div className="treatment-overview" style={{ background: 'white', padding: '20px', borderRadius: '24px', boxShadow: 'var(--card-shadow)', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--primary-text)', lineHeight: '1.4' }}>{diagnosis.treatment}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
              <Info size={12} color="var(--secondary-text)" />
              <p style={{ color: 'var(--secondary-text)', fontWeight: '600', fontSize: '12px' }}>{diagnosis.frequency}</p>
            </div>

            <div className="steps-row" style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              {diagnosis.steps.map((stepKey, idx) => (
                <div key={idx} style={{ flex: 1 }}>
                  <div style={{ position: 'relative', height: '70px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', background: '#f5f5f5' }}>
                    <img src={`https://images.unsplash.com/photo-1592982537447-${idx === 0 ? '7440770cbfc9' : '7440770cbfc0'}?q=80&w=400&auto=format&fit=crop`} alt={stepKey} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>
                      {stepKey === 'spray' && <Spray color="white" size={24} />}
                      {stepKey === 'water' && <Droplets color="white" size={24} />}
                      {stepKey === 'remove' && <Scissors color="white" size={24} />}
                      {stepKey === 'check' && <Info color="white" size={24} />}
                      {stepKey === 'drain' && <CheckCircle color="white" size={24} />}
                      {stepKey === 'mix' && <Sprout color="white" size={24} />}
                    </div>
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--primary-text)', marginTop: '8px', display: 'block', textTransform: 'uppercase', textAlign: 'center' }}>
                    {t(`diagnosis.default.steps.${stepKey}`) || stepKey.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'fixed', bottom: '16px', left: '16px', right: '16px', maxWidth: '418px', margin: '0 auto', zIndex: 10 }}>
          <ConfirmButton
            label={t('finish') || 'FINISH'}
            icon={CheckCircle2}
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResult;
