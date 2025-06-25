'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const MobileBottomNav: React.FC = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 glass z-40">
            <div className="flex justify-around items-center h-16">
                <button className="p-2 text-purple-400" onClick={() => navigateTo('/')}>
                    <i className="fas fa-home text-xl"></i>
                </button>
                <button className="p-2 text-gray-400" onClick={() => navigateTo('/search')}>
                    <i className="fas fa-search text-xl"></i>
                </button>
                <button className="p-2 text-gray-400" onClick={() => alert('Create new post feature coming soon!')}>
                    <i className="fas fa-plus-circle text-xl"></i>
                </button>
                <button className="p-2 text-gray-400" onClick={() => navigateTo('/notifications')}>
                    <i className="fas fa-bell text-xl"></i>
                </button>
                <button className="p-2 text-gray-400" onClick={() => navigateTo('/profile')}>
                    <i className="fas fa-user text-xl"></i>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;