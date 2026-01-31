import React from 'react';
import { Home, Tractor, History, User } from 'lucide-react';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <div className="nav-item">
                <Home size={24} />
                <span>HOME</span>
            </div>
            <div className="nav-item active">
                <Tractor size={24} />
                <span>ADVISORY</span>
            </div>
            <div className="nav-item">
                <History size={24} />
                <span>HISTORY</span>
            </div>
            <div className="nav-item">
                <User size={24} />
                <span>PROFILE</span>
            </div>
        </nav>
    );
};

export default BottomNav;
