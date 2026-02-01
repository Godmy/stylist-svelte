import type { HTMLButtonAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import { button } from './button.preset';
import { STATE_CLASSES } from '$stylist/design-system/tokens/classes';

// Типы для пресетов кнопок
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonVariant = ButtonVariants['variant'];
export type ButtonSize = ButtonVariants['size'];

// Базовые пропсы для кнопки
export interface ButtonBaseProps extends HTMLButtonAttributes {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  ariaLabel?: string;
  loadingLabel?: string;
  block?: boolean;
}

// Функция для получения классов кнопки (для использования вне компонента)
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