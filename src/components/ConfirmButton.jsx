import React from 'react';
import { CircleCheck } from 'lucide-react';

const ConfirmButton = ({ disabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="confirm-btn primary"
        >
            <span>Confirm Selection</span>
            <CircleCheck size={24} />
        </button>
    );
};

export default ConfirmButton;
