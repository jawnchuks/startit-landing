
import React from 'react';

interface NotificationIconProps {
  isActive: boolean;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4H10Z"
        fill={isActive ? '#08382C' : 'none'}
        stroke={isActive ? 'none' : '#08382C'}
        strokeWidth="1.2"
      />
      <path
        d="M9 19C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19H9Z"
        fill={isActive ? '#08382C' : 'none'}
        stroke={isActive ? 'none' : '#08382C'}
        strokeWidth="1.2"
      />
      <path
        d="M6 10.5556C6 7.48731 8.48731 5 11.5556 5H12.4444C15.5127 5 18 7.48731 18 10.5556V15H6V10.5556Z"
        fill={isActive ? '#08382C' : 'none'}
        stroke={isActive ? 'none' : '#08382C'}
        strokeWidth="1.2"
      />
      <rect x="4" y="16" width="16" height="2" rx="1" fill={isActive ? '#08382C' : 'none'} />
    </svg>
  );
};

export default NotificationIcon;
