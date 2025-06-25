import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="glass fixed top-0 left-0 right-0 z-50 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-2">
                            <span className="text-white font-bold text-xl">N</span>
                        </div>
                        <h1 className="text-2xl font-bold gradient-text">NEXUS</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-4 hidden md:block">
                        <div className="relative">
                            <input className="glass w-full pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300" 
                                   placeholder="Search..." />
                        </div>
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex items-center space-x-3">
                        <button className="glass p-3 rounded-full relative group">
                            <i className="fas fa-home text-xl"></i>
                        </button>
                        <button className="glass p-3 rounded-full relative group">
                            <i className="fas fa-users text-xl"></i>
                        </button>
                        <button className="glass p-3 rounded-full relative group">
                            <i className="fas fa-play-circle text-xl"></i>
                        </button>
                        <button className="glass p-3 rounded-full relative">
                            <i className="fas fa-bell text-xl"></i>
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <button className="glass p-3 rounded-full relative">
                            <i className="fas fa-comment-dots text-xl"></i>
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <div className="relative ml-2">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-0.5">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-gray-900"></span>
                        </div>
                        <button id="theme-toggle" className="glass p-3 rounded-full">
                            <i className="fas fa-moon text-xl"></i>
                        </button>
                        <button className="glass p-3 rounded-full" id="focus-mode-btn">
                            <i className="fas fa-expand-arrows-alt text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;