import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonVariant, ButtonSize } from './BaseButton';
import { button } from './button.preset';
import { STATE_CLASSES } from '$stylist/design-system/tokens/classes';

// Export the types so other files can import them
export type { ButtonVariant, ButtonSize };

// Пропсы для кнопки
export interface ButtonProps extends HTMLButtonAttributes {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  ariaLabel?: string;
  loadingLabel?: string;
  block?: boolean;
  children?: import('svelte').Snippet;
}

// Функция для получения классов кнопки
export const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  disabled = false,
  loading = false,
  className = ''
) => {
  return button({
    variant,
    size,
    disabled,
    loading,
    class: className
  });
};

// Экспорты для пресетов
export const BUTTON_PRESET = {
  classes: {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      success: 'bg-success text-success-foreground hover:bg-success/90',
      warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
      danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      info: 'bg-blue-500 text-white hover:bg-blue-600'
    },
    size: {
      sm: 'h-9 px-3 py-2 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-11 px-8 py-2 text-base',
      xl: 'h-12 px-10 py-3 text-lg'
    },
    state: {
      disabled: STATE_CLASSES.disabled
    }
  },
  loaderSize: {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6'
  }
};