import React from 'react';
import PostCard from './PostCard';

const NewsFeed = () => {
    return (
        <div className="space-y-6 appear-on-scroll">
            <PostCard 
                username="James Wilson" 
                avatarUrl="https://randomuser.me/api/portraits/men/32.jpg" 
                timeAgo="4h ago" 
                content="Just finished the most amazing hike in the mountains! 🏔️ The views were absolutely breathtaking. #nature #adventure" 
                reactions={124} 
                comments={32} 
                shares={15} 
            />
            <PostCard 
                username="Sophia Miller" 
                avatarUrl="https://randomuser.me/api/portraits/women/19.jpg" 
                timeAgo="Yesterday at 8:30 PM" 
                content="My new article on the future of UX design is finally published! 🚀 Excited to hear your thoughts about where the industry is heading in the next 5 years. #design #ux #tech" 
                reactions={89} 
                comments={27} 
                shares={32} 
            />
            <PostCard 
                username="Michael Brown" 
                avatarUrl="https://randomuser.me/api/portraits/men/43.jpg" 
                timeAgo="2h ago" 
                content="This new JavaScript framework is a game-changer! 😮 So much cleaner and more intuitive than React. Thoughts?" 
                reactions={42} 
                comments={15} 
                shares={7} 
            />
        </div>
    );
};

export default NewsFeed;