// Status colors mapping
export const STATUS_COLORS = {
  online: 'bg-green-500',
  away: 'bg-yellow-500',
  offline: 'bg-gray-400',
  typing: 'bg-blue-500',
  idle: 'bg-orange-500'
} as const;

// Size classes mapping
export const AVATAR_SIZE_CLASSES = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl'
} as const;

// Status size classes mapping
export const STATUS_SIZE_CLASSES = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5'
} as const;

// Default CSS classes for avatar
export const DEFAULT_AVATAR_CLASSES = 'inline-flex items-center justify-center rounded-full bg-gray-200 font-medium text-gray-700';

// Default border classes for status indicator
export const STATUS_BORDER_CLASSES = 'absolute bottom-0 right-0 rounded-full border-2 border-white';