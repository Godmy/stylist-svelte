export interface DarkModeToggleProps {
  darkMode?: boolean;
  disabled?: boolean;
  onToggle?: (params: { darkMode: boolean }) => void;
  class?: string;
}

export const DEFAULT_DARK_MODE = false;
export const DEFAULT_DARK_MODE_DISABLED = false;

export const getDarkModeToggleClasses = (
  isDarkMode: boolean,
  isDisabled: boolean,
  className = ''
) => {
  const baseClasses = [
    'dark-mode-toggle',
    'bg-none',
    'border-none',
    'text-xl',
    'cursor-pointer',
    'p-2',
    'rounded-full',
    'transition-colors',
    'duration-200'
  ];

  baseClasses.push(isDarkMode ? 'text-yellow-300' : 'text-yellow-500');

  if (isDisabled) {
    baseClasses.push('opacity-50', 'cursor-not-allowed');
  } else {
    baseClasses.push('hover:bg-gray-100', 'dark:hover:bg-gray-700');
  }

  if (className) baseClasses.push(className);

  return baseClasses.join(' ');
};
