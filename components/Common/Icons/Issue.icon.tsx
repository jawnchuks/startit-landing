import React from 'react';

type IconProps = {
  size?: number;
  filled?: boolean;
  className?: string;
};

const IssueIcon: React.FC<IconProps> = ({ size = 24, filled = true, className }) => {
  const fillColor = filled ? 'currentColor' : 'none';
  const strokeColor = filled ? 'currentColor' : 'none';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={strokeColor} fill='none' strokeWidth="1.5"/>
<circle cx="12" cy="16" r="1" fill={fillColor} stroke="none"/>
<path d="M12 7V13" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
};

export default IssueIcon;
