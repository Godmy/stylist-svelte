export const TOOLBAR_VARIANTS = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'error',
    'info',
    'neutral',
    'dark',
    'light'
] as const;
export type ToolbarVariant = (typeof TOOLBAR_VARIANTS)[number];
