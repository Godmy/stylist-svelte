export type IconCircleVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type IconCircleSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconCircleProps {
  icon: string;
  variant?: IconCircleVariant;
  size?: IconCircleSize;
  gradient?: boolean;
  class?: string;
}

export const ICON_CIRCLE_DEFAULTS = {
  variant: 'primary' as IconCircleVariant,
  size: 'md' as IconCircleSize,
  gradient: false
};

const ICON_CIRCLE_BASE_CLASSES = 'icon-circle flex items-center justify-center rounded-full';

const ICON_CIRCLE_SIZE_CLASSES: Record<IconCircleSize, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
  xl: 'w-20 h-20 text-xl'
};

const ICON_CIRCLE_GRADIENT_CLASSES: Record<IconCircleVariant, string> = {
  primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white',
  secondary: 'bg-gradient-to-r from-gray-500 to-gray-700 text-white',
  success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white',
  warning: 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white',
  danger: 'bg-gradient-to-r from-red-500 to-rose-600 text-white',
  info: 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white'
};

const ICON_CIRCLE_SOLID_CLASSES: Record<IconCircleVariant, string> = {
  primary: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  secondary: 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400',
  success: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  warning: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
  danger: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  info: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400'
};

export const getIconCircleClasses = (
  variant: IconCircleVariant,
  size: IconCircleSize,
  gradient: boolean,
  className = ''
): string => {
  const sizeClasses = ICON_CIRCLE_SIZE_CLASSES[size];
  const variantClasses = gradient ? ICON_CIRCLE_GRADIENT_CLASSES[variant] : ICON_CIRCLE_SOLID_CLASSES[variant];
  const baseClasses = `${ICON_CIRCLE_BASE_CLASSES} ${sizeClasses} ${variantClasses}`.trim();
  return className ? `${baseClasses} ${className}` : baseClasses;
};
