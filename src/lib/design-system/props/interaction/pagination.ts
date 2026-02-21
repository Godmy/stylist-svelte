import type { HTMLAttributes } from 'svelte/elements';

export type PaginationVariant = 'default' | 'compact' | 'minimal';
export type PaginationSize = 'sm' | 'md' | 'lg';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showDots?: boolean;
  maxVisible?: number;
  variant?: PaginationVariant;
  size?: PaginationSize;
  disabled?: boolean;
  class?: string;
  buttonClass?: string;
  activeButtonClass?: string;
  disabledButtonClass?: string;
  onPageChange?: (page: number) => void;
} & HTMLAttributes<HTMLDivElement>;