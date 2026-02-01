import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ConfirmButton = ({ disabled, onClick, label, icon: Icon = ArrowRight }) => {
  const { t } = useTranslation();
  return (
    <div className="button-container">
      <button
        onClick={onClick}
        disabled={disabled}
        className="confirm-btn primary"
      >
        <span>{label || t('continue')}</span>
        {Icon && <Icon size={20} />}
      </button>
    </div>
  );
};

export default ConfirmButton;

