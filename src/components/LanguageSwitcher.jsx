import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <span style={{ fontSize: '12px' }}>{t('language')}</span>
      <button onClick={() => changeLang('en')}>EN</button>
      <button onClick={() => changeLang('hi')}>HI</button>
      <button onClick={() => changeLang('mr')}>MR</button>
    </div>
  );
};

export default LanguageSwitcher;