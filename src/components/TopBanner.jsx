import React from 'react';
import { WifiOff } from 'lucide-react';

const TopBanner = () => {
    return (
        <div className="offline-banner" style={{ width: 'fit-content' }}>
            <WifiOff size={16} />
            <span>OFFLINE-READY</span>
        </div>
    );
};

export default TopBanner;
