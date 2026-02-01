import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
      <button onClick={() => changeLanguage('en')} style={{ padding: '4px 8px', fontSize: '12px' }}>EN</button>
      <button onClick={() => changeLanguage('hi')} style={{ padding: '4px 8px', fontSize: '12px' }}>हिं</button>
    </div>
  );
};

export default LanguageSwitcher;