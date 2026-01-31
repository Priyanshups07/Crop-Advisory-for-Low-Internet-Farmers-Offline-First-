import React from 'react';

const CropCard = ({ name, image, selected, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '32px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--card-shadow)',
                cursor: 'pointer',
                border: selected ? '3px solid var(--button-active)' : '3px solid transparent',
                transition: 'all 0.2s ease',
                transform: selected ? 'scale(0.98)' : 'scale(1)',
            }}
        >
            <div style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '24px',
                overflow: 'hidden',
            }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <span style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--primary-text)'
            }}>{name}</span>
        </div>
    );
};

export default CropCard;
