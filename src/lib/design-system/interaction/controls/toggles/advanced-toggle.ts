export interface AdvancedToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  class?: string;
}

export const DEFAULT_ADVANCED_TOGGLE_LABEL = '';
export const DEFAULT_ADVANCED_TOGGLE_CHECKED = false;
export const DEFAULT_ADVANCED_TOGGLE_DISABLED = false;

export const getAdvancedToggleContainerClass = (className = '') => {
  const baseClass = 'flex items-center';
  return className ? `${baseClass} ${className}`.trim() : baseClass;
};

export const getAdvancedToggleLabelWrapperClass = () => 'flex items-center cursor-pointer';

export const getAdvancedToggleContainerClasses = () => 'relative';

export const getAdvancedToggleHiddenInputClass = () => 'sr-only';

export const getAdvancedToggleBackgroundClass = (isChecked: boolean) => {
  const baseClass = 'block w-14 h-8 rounded-full';
  const stateClass = isChecked ? 'bg-[--color-primary-500]' : 'bg-[--color-background-tertiary]';
  return `${baseClass} ${stateClass}`.trim();
};

export const getAdvancedToggleHandleClass = (isChecked: boolean) => {
  const baseClass =
    'absolute left-[--spacing-xs] top-[--spacing-xs] bg-[--color-background-primary] w-6 h-6 rounded-full transition-transform';
  const positionClass = isChecked ? 'transform translate-x-6' : '';
  return [baseClass, positionClass].filter(Boolean).join(' ');
};

export const getAdvancedToggleLabelTextClass = (disabled: boolean) => {
  const baseClass = 'ml-[--spacing-md] font-medium';
  const stateClass = disabled ? 'text-[--color-text-disabled]' : 'text-[--color-text-primary]';
  return `${baseClass} ${stateClass}`.trim();
};
