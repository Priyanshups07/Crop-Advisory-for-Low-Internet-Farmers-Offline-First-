import React from 'react';
import { ArrowRight } from 'lucide-react';

const ConfirmButton = ({ disabled, onClick }) => {
    return (
        <div className="button-container">
            <button
                onClick={onClick}
                disabled={disabled}
                className="confirm-btn primary"
            >
                <span>CONTINUE</span>
                <ArrowRight size={24} />
            </button>
        </div>
    );
};

export default ConfirmButton;
