import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { SidebarVariant } from '$stylist/design-system/tokens/interaction/variants';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showDots?: boolean;
  maxVisible?: number;
  variant?: SidebarVariant;
  size?: ComponentSize;
  disabled?: boolean;
  class?: string;
  buttonClass?: string;
  activeButtonClass?: string;
  disabledButtonClass?: string;
  onPageChange?: (page: number) => void;
} & HTMLAttributes<HTMLDivElement>;

