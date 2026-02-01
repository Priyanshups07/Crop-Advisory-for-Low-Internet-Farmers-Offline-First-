import React from 'react';
import { X, Languages, Check } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose, currentLanguage, onLanguageChange }) => {
    if (!isOpen) return null;

    const languages = [
        { code: 'en', name: 'English', native: 'English' },
        { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
        { code: 'mr', name: 'Marathi', native: 'मराठी' },
        { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
        { code: 'ta', name: 'Tamil', native: 'தமிழ்' }
    ];

    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings-content" onClick={e => e.stopPropagation()}>
                <div className="settings-header">
                    <h2>Settings</h2>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="settings-section">
                    <div className="section-title">
                        <Languages size={20} />
                        <span>Select Language</span>
                    </div>

                    <div className="language-grid">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`language-item ${currentLanguage === lang.code ? 'active' : ''}`}
                                onClick={() => onLanguageChange(lang.code)}
                            >
                                <div className="lang-info">
                                    <span className="lang-name">{lang.name}</span>
                                    <span className="lang-native">{lang.native}</span>
                                </div>
                                {currentLanguage === lang.code && <Check size={20} className="check-icon" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="settings-footer">
                    <button className="done-btn" onClick={onClose}>Done</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
