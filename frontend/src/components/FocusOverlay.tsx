import React from 'react';

const FocusOverlay: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-black/70 z-50 ${isVisible ? 'block' : 'hidden'}`} onClick={onClose}>
            {/* Overlay content can be added here if needed */}
        </div>
    );
};

export default FocusOverlay;