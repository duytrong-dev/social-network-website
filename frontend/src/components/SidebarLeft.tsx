import React from 'react';

const SidebarLeft: React.FC = () => {
    return (
        <div className="hidden md:block w-64 shrink-0 focus-mode">
            <div className="sticky top-24">
                <div className="sidebar-scroll">
                    <div className="sidebar-scroll-content">
                        <div className="space-y-5">
                            <div className="glass p-4 rounded-2xl">
                                {/* Community content goes here */}
                            </div>
                            
                            {/* Communities */}
                            <div className="glass p-4 rounded-2xl">
                                {/* User-related content goes here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;