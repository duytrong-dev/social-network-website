'use client';
import React from 'react';

const FloatingCreateButton: React.FC = () => {
    const handleClick = () => {
        alert('Create new post feature coming soon!');
    };

    return (
        <button 
            className="floating-btn create-btn w-16 h-16 rounded-full flex items-center justify-center fixed z-40 right-6 bottom-24 md:bottom-6 text-white text-2xl"
            onClick={handleClick}
        >
            <i className="fas fa-plus"></i>
        </button>
    );
};

export default FloatingCreateButton;