import React from 'react';

const CropCard = ({ name, image, selected, onClick }) => {
    return (
        <div
            className={`crop-card ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <div className="image-wrapper">
                <img src={image} alt={name} />
            </div>
            <div className="card-info">
                <span className="name">{name}</span>
            </div>
        </div>
    );
};

export default CropCard;
