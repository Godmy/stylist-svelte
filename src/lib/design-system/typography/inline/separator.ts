export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps {
  orientation?: SeparatorOrientation;
  decorative?: boolean;
  class?: string;
}

export const DEFAULT_SEPARATOR_ORIENTATION: SeparatorOrientation = 'horizontal';
export const DEFAULT_SEPARATOR_DECORATIVE = false;

export const getSeparatorClasses = (orientation: SeparatorOrientation, className = '') => {
  const base =
    orientation === 'horizontal'
      ? 'w-full border-t border-[--color-border-secondary]'
      : 'h-full border-l border-[--color-border-secondary]';
  return `${base} ${className}`.trim();
};
