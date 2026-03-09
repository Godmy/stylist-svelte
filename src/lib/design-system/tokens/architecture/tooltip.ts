export const TOOLTIP_VARIANTS = ['default', 'with-arrow', 'simple'] as const;
export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number];
