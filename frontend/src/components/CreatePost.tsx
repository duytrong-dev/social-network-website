import React from 'react';

const CreatePost: React.FC = () => {
    return (
        <div className="glass p-5 rounded-2xl mb-6 fade-in">
            <div className="flex items-start">
                <div className="avatar w-12 h-12 mr-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <button className="glass w-full text-left py-3 px-4 rounded-full mb-3 text-gray-400 hover:text-gray-200">
                        What's on your mind?
                    </button>
                    
                    <div className="flex items-center border-t border-gray-700 pt-3 justify-between">
                        <button className="upload-btn px-3 py-2 rounded-full hover:bg-indigo-500/20 text-gray-400 hover:text-indigo-400 transition-colors">
                            Upload Image
                        </button>
                        <button className="upload-btn px-3 py-2 rounded-full hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-colors">
                            Upload Video
                        </button>
                        <button className="upload-btn px-3 py-2 rounded-full hover:bg-pink-500/20 text-gray-400 hover:text-pink-400 transition-colors">
                            <i className="fas fa-smile upload-icon mr-2"></i> Mood
                        </button>
                        <button className="upload-btn px-3 py-2 rounded-full hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-colors">
                            <i className="fas fa-poll upload-icon mr-2"></i> Poll
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;