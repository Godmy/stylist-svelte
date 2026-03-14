export const TOOLTIP_VARIANTS = ['default', 'with-arrow', 'simple'] as const;
export const TOOLTIP_PLACEMENTS = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end'
] as const;
export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number];
export type TooltipPlacement = (typeof TOOLTIP_PLACEMENTS)[number];
