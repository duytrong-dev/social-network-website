import React from 'react';

const SidebarRight: React.FC = () => {
    return (
        <div className="hidden md:block w-72 shrink-0 focus-mode">
            <div className="sticky top-24">
                <div className="sidebar-scroll">
                    <div className="sidebar-scroll-content">
                        <div className="space-y-6">
                            {/* Friend Suggestions */}
                            <div className="glass p-4 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold">Friend Suggestions</h3>
                                    <button className="text-xs text-indigo-400">See All</button>
                                </div>
                                <div className="space-y-4">
                                    {/* Example Friend Suggestion */}
                                    <div className="flex items-center">
                                        <div className="avatar w-12 h-12 mr-3">
                                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold">Olivia Taylor</h4>
                                            <p className="text-xs text-gray-400">12 mutual friends</p>
                                        </div>
                                        <button className="glass p-1.5 rounded-full">
                                            <i className="fas fa-user-plus text-sm"></i>
                                        </button>
                                    </div>
                                    {/* Add more friend suggestions as needed */}
                                </div>
                            </div>

                            {/* Trending */}
                            <div className="glass p-4 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold">Trending Today</h3>
                                    <button className="text-xs text-indigo-400">See More</button>
                                </div>
                                <div className="space-y-4">
                                    {/* Example Trending Topic */}
                                    <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-900/50 to-pink-900/50">
                                        <div className="text-xs text-indigo-400 mb-1">
                                            <span>Technology • Trending</span>
                                        </div>
                                        <h4 className="font-semibold mb-1">AI Breakthrough</h4>
                                        <p className="text-xs text-gray-400">23.4K posts</p>
                                    </div>
                                    {/* Add more trending topics as needed */}
                                </div>
                            </div>

                            {/* Groups */}
                            <div className="glass p-4 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold">Popular Groups</h3>
                                    <button className="text-xs text-indigo-400">See All</button>
                                </div>
                                <div className="space-y-4">
                                    {/* Example Group */}
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                                            <i className="fas fa-dumbbell text-white"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Fitness Community</h4>
                                            <p className="text-xs text-gray-400">345K members</p>
                                        </div>
                                    </div>
                                    {/* Add more groups as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarRight;