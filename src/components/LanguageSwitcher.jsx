import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'HI' },
    { code: 'mr', label: 'MR' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector" style={{
      display: 'flex',
      background: 'rgba(255, 255, 255, 0.4)',
      padding: '4px',
      borderRadius: '12px',
      border: '1px solid var(--glass-border)',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
    }}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            padding: '6px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            background: i18n.language === lang.code ? 'var(--button-active)' : 'transparent',
            color: i18n.language === lang.code ? 'white' : 'var(--secondary-text)',
            boxShadow: i18n.language === lang.code ? '0 4px 12px rgba(26, 57, 36, 0.2)' : 'none'
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;