import type { HTMLAttributes } from 'svelte/elements';
import type { BadgeSize, BadgeVariant } from './badge';

export interface BadgeGroupItem {
  id: string;
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BadgeGroupProps extends HTMLAttributes<HTMLDivElement> {
  badges: BadgeGroupItem[];
  maxVisible?: number;
  showOverflow?: boolean;
  class?: string;
  badgeClass?: string;
  overflowClass?: string;
}

export const getBadgeGroupContainerClasses = (className = '') => {
  const baseClasses = 'flex flex-wrap items-center gap-2';
  return className ? `${baseClasses} ${className}` : baseClasses;
};

export const getBadgeGroupOverflowClasses = (className = '') => {
  const baseClasses =
    'inline-flex items-center rounded-full text-xs font-medium bg-[--color-neutral-100] text-[--color-neutral-800] px-2.5 py-0.5';
  return className ? `${baseClasses} ${className}` : baseClasses;
};
