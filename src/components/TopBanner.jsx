import React from 'react';
import { WifiOff } from 'lucide-react';

const TopBanner = () => {
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--accent-green)',
            color: 'var(--accent-green-text)',
            padding: '8px 16px',
            borderRadius: '24px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.5px',
            width: 'fit-content'
        }}>
            <WifiOff size={16} />
            <span>OFFLINE-READY</span>
        </div>
    );
};

export default TopBanner;
