export type IconChevronSize = 'sm' | 'md' | 'lg';

export interface IconChevronProps {
  isOpen?: boolean;
  size?: IconChevronSize;
  class?: string;
}

export const ICON_CHEVRON_DEFAULTS = {
  isOpen: false,
  size: 'md' as IconChevronSize,
  iconName: 'chevron-down'
};

export const ICON_CHEVRON_BASE_CLASSES =
  'inline-flex items-center justify-center transition-transform duration-200';

export const ICON_CHEVRON_ROTATED_CLASS = 'rotate-180';

export const getIconChevronClasses = (isOpen: boolean, className = ''): string => {
  const rotationClass = isOpen ? ICON_CHEVRON_ROTATED_CLASS : '';
  return `${ICON_CHEVRON_BASE_CLASSES} ${rotationClass} ${className}`.trim();
};
