'use client'

// components/LikeIcon.tsx

import React, { useState } from 'react';

interface LikeIconProps {
  initialLiked: boolean; // Initial liked state
}

const LikeIcon: React.FC<LikeIconProps> = ({ initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      className={` cursor-pointer ${liked ? 'liked' : ''}`}
      onClick={toggleLike}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? 'red' : 'none'}
        viewBox="0 0 24 24"
        stroke={liked ? 'red' : 'currentColor'}
        className="w-6 h-6"
      >
        <path d="M2.02855 9.88794C2.49595 15.9703 8.84488 19.8303 11.9609 21C15.2818 19.895 21.3696 16.0276 21.9231 9.88794C22.9164 2.21577 14.0003 1.17195 11.9609 5.66791C9.99982 1.17195 1.44429 2.28495 2.02855 9.88794Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default LikeIcon;
