import React from 'react';
import { Icon } from '@iconify/react';

// Button Component หลัก
type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline' | 'outline-secondary' | 'outline-danger' | 'outline-success' | 'link';

export const Button = ({
  children = null,
  variant = 'primary',
  size = 'md',
  rounded = 'md',
  icon = null,
  iconPosition = 'left',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick = undefined,
  type = 'button',
  ...props
}: {
  children?: React.ReactNode;
  variant?: Variant;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  icon?: string | null;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset';
}) => {
  // กำหนด style ตาม variant
  const variantStyles = {
    primary: 'box hover:scale-105 hover:transition-all',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    'outline-secondary': 'bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-50',
    'outline-danger': 'bg-transparent border border-red-600 text-red-600 hover:bg-red-50',
    'outline-success': 'bg-transparent border border-green-600 text-green-600 hover:bg-green-50',
    link: 'bg-transparent text-blue-600 hover:underline hover:text-blue-800 p-0',
  };

  // กำหนดขนาดตาม size
  const sizeStyles = {
    xs: 'text-xs py-1 px-2',
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-5',
    xl: 'text-xl py-3 px-6',
  };

  // กำหนดความโค้งของมุม
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // รวม style ทั้งหมด
  const buttonClasses = `
    inline-flex items-center justify-center
    transition-colors duration-200
    font-medium
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-w-500
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.md}
    ${roundedStyles[rounded] || roundedStyles.md}
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
    ${variant.includes('link') ? '' : 'shadow-sm'}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <Icon icon={icon} className={`${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon icon={icon} className={`${children ? 'ml-2' : ''}`} />
      )}
    </button>
  );
};

