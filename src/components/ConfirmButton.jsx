import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ConfirmButton = ({ disabled, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="button-container">
      <button
        onClick={onClick}
        disabled={disabled}
        className="confirm-btn primary"
      >
        <span>{t('continue')}</span>
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default ConfirmButton;
