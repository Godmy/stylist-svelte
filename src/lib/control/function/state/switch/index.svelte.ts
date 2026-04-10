import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type SwitchStateProps = {
  id?: string;
  label?: string;
  description?: string;
  size?: TokenSize;
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  class?: string;
  ariaLabel?: string;
};

export function createSwitchState(props: SwitchStateProps) {
  const className = props.class ?? '';

  const containerClasses = joinClassNames(
    'flex items-start gap-3',
    props.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
    className
  );

  const sizeClasses: Record<string, string> = {
    xs: 'w-8 h-4',
    sm: 'w-9 h-5',
    md: 'w-11 h-6',
    lg: 'w-14 h-7',
    xl: 'w-16 h-8'
  };

  const knobSizeClasses: Record<string, string> = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  function getTrackClasses(checked: boolean, disabled: boolean): string {
    return joinClassNames(
      'relative rounded-full transition-colors duration-200',
      sizeClasses[props.size ?? 'md'] ?? sizeClasses.md,
      checked ? 'bg-[var(--color-primary-500)]' : 'bg-[var(--color-border-primary)]',
      disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer'
    );
  }

  function getKnobClasses(checked: boolean, size: TokenSize): string {
    return joinClassNames(
      'absolute top-0.5 left-0.5 rounded-full bg-white shadow-md transition-transform duration-200',
      checked ? 'translate-x-[var(--spacing-5)]' : 'translate-x-0',
      knobSizeClasses[size] ?? knobSizeClasses.md
    );
  }

  function getInputClasses(disabled: boolean): string {
    return joinClassNames(
      'sr-only',
      disabled ? 'cursor-not-allowed' : ''
    );
  }

  function getLabelClasses(disabled: boolean): string {
    return joinClassNames(
      'text-sm font-medium leading-5 text-[var(--color-text-primary)]',
      disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
    );
  }

  return {
    containerClasses,
    getTrackClasses,
    getKnobClasses,
    getInputClasses,
    getLabelClasses
  };
}

export default createSwitchState;
