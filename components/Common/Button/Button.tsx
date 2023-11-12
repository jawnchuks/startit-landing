import React from 'react';

interface ButtonProps {
  label?: string;
  size?: 'small' | 'normal' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline' | 'icon-only'| 'text-icon' | 'default' ;
  state?: 'default' | 'hover' | 'active' | 'disabled';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void ;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'default',
  variant = '',
  state = 'default',
  icon,
  fullWidth = false,
  onClick,
}) => {
  const getButtonClasses = () => {
    let classes = '';

    switch (variant) {
      case 'primary':
        classes = 'bg-primaryGreen text-primaryWhite rounded-full font-semibold';
        break;
      case 'secondary':
        classes = 'bg-secondaryGreen text-secondaryOffWhite rounded-full';
        break;
      case 'outline':
        classes = 'border-primaryYellow border-2 text-primaryWhite rounded-full';
        break;
      case 'icon-only':
        classes = 'bg-primaryGreen text-primaryWhite rounded-full';
        break;
        case 'icon-only-secondary':
        classes = 'border-secondaryOffWhite border-2  text-primaryWhite rounded-full';
        break;
        case 'icon-only-outline':
        classes = 'border-primaryYellow border-2  text-primaryWhite rounded-full';
        break;
      default:
        classes = 'bg-secondaryOffWhite text-primaryWhite rounded-full';
        break;
    }

    switch (state) {
      case 'hover':
        classes += ' hover:bg-secondaryGreen';
        break;
      case 'active':
        classes += ' active:bg-secondaryOffWhite';
        break;
      case 'disabled':
        classes += ' opacity-50 pointer-events-none';
        break;
      default:
        break;
    }

    switch (size) {
      case 'small':
        classes += ' px-2 py-1 text-small';
        break;
      case 'normal':
        classes += ' px-4 py-2 text-base';
        break;
      case 'medium':
        classes += ' px-6 py-3 text-base';
        break;
      case 'large':
        classes += ' px-8 py-4 text-large';
        break;
      default: classes += ' p-1 text-small'
        break;
    }

    if (fullWidth) {
      classes += ' w-full flex items-center justify-center';
    } else {
      classes += ' flex items-center justify-center gap-2';
    }

    return classes;
  };

  return (
    <button className={getButtonClasses()} disabled={state === 'disabled'} onClick={onClick}>
      {label}
      {variant === 'icon-only' && icon}
      {variant !== 'text-icon' && label && <span className="">{icon}</span>  }
    </button>
  );
};

export default Button;