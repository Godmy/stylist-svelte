// Default values
export const CHIP_DEFAULT_VARIANT: 'primary' = 'primary';
export const CHIP_DEFAULT_SIZE: 'md' = 'md';
export const CHIP_DEFAULT_CLOSEABLE = false;
export const CHIP_DEFAULT_DISABLED = false;

// CSS classes
export const CHIP_BASE_CLASSES = 'inline-flex items-center font-medium rounded-full';
export const CHIP_SIZE_CLASSES = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base'
};
export const CHIP_VARIANT_CLASSES = {
  primary: 'bg-[--color-primary-100] text-[--color-primary-800] dark:bg-[--color-primary-900] dark:text-[--color-primary-200]',
  secondary: 'bg-[--color-secondary-100] text-[--color-secondary-800] dark:bg-[--color-secondary-900] dark:text-[--color-secondary-200]',
  success: 'bg-[--color-success-100] text-[--color-success-800] dark:bg-[--color-success-900] dark:text-[--color-success-200]',
  warning: 'bg-[--color-warning-100] text-[--color-warning-800] dark:bg-[--color-warning-900] dark:text-[--color-warning-200]',
  danger: 'bg-[--color-danger-100] text-[--color-danger-800] dark:bg-[--color-danger-900] dark:text-[--color-danger-200]'
};

export const CLOSE_BUTTON_BASE_CLASSES = 'ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';
export const CLOSE_BUTTON_SIZE_CLASSES = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4'
};
export const CLOSE_BUTTON_VARIANT_CLASSES = {
  primary: 'focus:ring-[--color-primary-500] hover:bg-[--color-primary-200] dark:hover:bg-[--color-primary-800]',
  secondary: 'focus:ring-[--color-secondary-500] hover:bg-[--color-secondary-200] dark:hover:bg-[--color-secondary-800]',
  success: 'focus:ring-[--color-success-500] hover:bg-[--color-success-200] dark:hover:bg-[--color-success-800]',
  warning: 'focus:ring-[--color-warning-500] hover:bg-[--color-warning-200] dark:hover:bg-[--color-warning-800]',
  danger: 'focus:ring-[--color-danger-500] hover:bg-[--color-danger-200] dark:hover:bg-[--color-danger-800]'
};

// Accessibility attributes
export const ARIA_LABEL_CLOSE = 'Close';
export const ROLE_PRESENTATION = 'presentation';