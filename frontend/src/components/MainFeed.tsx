import React from 'react';
import CreatePost from './CreatePost';
import Stories from './Stories';
import NewsFeed from './NewsFeed';

const MainFeed: React.FC = () => {
    return (
        <div className="flex-1 max-w-2xl">
            {/* Create Post Section */}
            <CreatePost />

            {/* Stories Section */}
            <Stories />

            {/* News Feed Section */}
            <div className="space-y-6 appear-on-scroll">
                <NewsFeed />
            </div>
        </div>
    );
};

export default MainFeed;