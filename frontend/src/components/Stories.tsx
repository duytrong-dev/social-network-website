import React from 'react';

const Stories = () => {
    return (
        <div className="glass p-4 rounded-2xl mb-6 fade-in">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Stories</h2>
                <button className="text-indigo-400 text-sm">View All</button>
            </div>
            
            <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
                <div className="px-1">
                    <div className="w-20 flex flex-col items-center">
                        <div className="mb-2 relative">
                            <div className="story-ring">
                                <div className="bg-gray-800 rounded-full p-0.5"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-gray-900"></div>
                        </div>
                        <p className="text-xs text-center truncate w-full">Your Story</p>
                    </div>
                </div>
                
                {/* Example story items */}
                {['James Wilson', 'Emma Davis', 'Olivia Taylor', 'Michael Brown', 'Sophia Miller'].map((name, index) => (
                    <div className="px-1" key={index}>
                        <div className="w-20 flex flex-col items-center">
                            <div className="mb-2">
                                <div className="story-ring"></div>
                            </div>
                            <p className="text-xs text-center truncate w-full">{name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stories;