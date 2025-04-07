import React from 'react';

const TopNav: React.FC = () => {
    return (
        <div className="top-nav">
            <div className="name"><a href="#">Citizen Success Score</a></div>
            <div className="nav-item"><a href="#">Check your Score</a></div>
            <div className="nav-item"><a href="#">About</a></div>
            <div className="nav-item"><a href="#">Learn</a></div>
        </div>
    );
};

export default TopNav;