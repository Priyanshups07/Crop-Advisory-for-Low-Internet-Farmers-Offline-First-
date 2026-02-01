import React from 'react';
import { WifiOff, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import speak from '../utils/speech';
import i18n from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const TopBanner = () => {
  const { t } = useTranslation();
  const play = (key) => speak(t(key), i18n.language);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
      <div>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {t('welcome')}
          <button aria-label="speak welcome" onClick={() => play('welcome')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Volume2 size={16} />
          </button>
        </h1>
        <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {t('greeting')}
          <button aria-label="speak greeting" onClick={() => play('greeting')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Volume2 size={14} />
          </button>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <LanguageSwitcher />
        <div className="offline-banner" style={{ width: 'fit-content' }}>
          <WifiOff size={16} />
          <span>{t('offlineReady')}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
