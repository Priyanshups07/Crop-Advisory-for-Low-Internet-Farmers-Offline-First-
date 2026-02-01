import React from 'react';
import { WifiOff, ArrowLeft, CloudOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const TopBanner = ({ onBack, showOffline = true }) => {
  const { t } = useTranslation();

  return (
    <div className="top-nav" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '8px 0',
      marginBottom: '24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {onBack && (
          <button className="back-btn" onClick={onBack} style={{
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            boxShadow: 'var(--card-shadow)',
            color: 'var(--primary-text)'
          }}>
            <ArrowLeft size={24} />
          </button>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <LanguageSwitcher />
        {showOffline && (
          <div className="offline-banner">
            <CloudOff size={16} />
            <span>{t('offlineReady')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBanner;

