import React from 'react';

interface PostCardProps {
    avatarUrl: string;
    username: string;
    timeAgo: string;
    content: string;
    reactions: number;
    comments: number;
    shares: number;
}

const PostCard: React.FC<PostCardProps> = ({ avatarUrl, username, timeAgo, content, reactions, comments, shares }) => {
    return (
        <div className="post-card glass rounded-2xl overflow-hidden">
            <div className="p-5">
                <div className="flex items-start mb-4">
                    <div className="avatar w-10 h-10 mr-3">
                        <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold">{username}</h3>
                        <p className="text-xs text-gray-400">{timeAgo} <span className="mx-1">•</span> <i className="fas fa-globe-asia"></i></p>
                    </div>
                </div>
                
                <p className="mb-4">{content}</p>
                
                <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center">
                        <span className="ml-3 text-sm text-gray-400">{reactions} reactions</span>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                        <span>{comments} comments</span>
                        <span className="mx-1">•</span>
                        <span>{shares} shares</span>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-700 flex">
                <button className="reaction-btn flex-1 py-3 text-center text-gray-400 hover:text-indigo-400 transition-colors">
                    <i className="fas fa-thumbs-up mr-2"></i> Like
                </button>
                <button className="reaction-btn flex-1 py-3 text-center text-gray-400 hover:text-yellow-400 transition-colors">
                    <i className="fas fa-comment mr-2"></i> Comment
                </button>
                <button className="reaction-btn flex-1 py-3 text-center text-gray-400 hover:text-green-400 transition-colors">
                    <i className="fas fa-share mr-2"></i> Share
                </button>
            </div>
        </div>
    );
};

export default PostCard;