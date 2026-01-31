import React from 'react';
import { CircleCheck } from 'lucide-react';

const ConfirmButton = ({ disabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                width: '100%',
                padding: '20px',
                borderRadius: '32px',
                border: 'none',
                backgroundColor: disabled ? 'var(--button-default)' : 'var(--button-active)',
                color: disabled ? 'var(--button-text-default)' : 'var(--button-text-active)',
                fontSize: '18px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease',
                marginTop: 'auto',
                marginBottom: '24px'
            }}
        >
            <span>Confirm Selection</span>
            <CircleCheck size={24} />
        </button>
    );
};

export default ConfirmButton;
