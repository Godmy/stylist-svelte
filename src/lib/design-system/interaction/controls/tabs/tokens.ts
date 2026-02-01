export type TabVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
export type TabSize = 'sm' | 'md' | 'lg';

export const DEFAULT_TAB_VARIANT: TabVariant = 'primary';
export const DEFAULT_TAB_SIZE: TabSize = 'md';

export const TAB_BASE_CLASSES = 'inline-flex items-center justify-center rounded-md transition-colors';
export const TAB_SIZE_CLASSES: Record<TabSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-4 py-2 text-lg'
};

export const TAB_VARIANT_CLASSES: Record<TabVariant, string> = {
  primary: 'text-[--color-primary-600]',
  secondary: 'text-[--color-secondary-600]',
  success: 'text-[--color-success-600]',
  warning: 'text-[--color-warning-600]',
  danger: 'text-[--color-danger-600]',
  ghost: 'text-[--color-text-primary]',
  link: 'text-[--color-primary-600] underline underline-offset-4'
};

export const TAB_ACTIVE_CLASSES = 'bg-[--color-background-secondary] font-semibold';
export const TAB_INACTIVE_CLASSES = 'text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-background-secondary]';

export const DISABLED_CLASSES = 'opacity-50 cursor-not-allowed';

export const TAB_LIST_BASE_CLASSES = 'flex items-center gap-2';
export const TAB_LIST_LAYOUT_CLASSES = 'flex flex-col';

export const TAB_INDICATOR_BASE_CLASSES = 'absolute bottom-0 h-0.5 rounded-full transition-all duration-200';

export const TAB_PANEL_VISIBLE_CLASS = 'block';
export const TAB_PANEL_HIDDEN_CLASS = 'hidden';
