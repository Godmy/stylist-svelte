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
export type TooltipPlacement = (typeof TOOLTIP_PLACEMENTS)[number];

export const TOOLTIP_TRIGGERS = ['hover', 'click', 'focus'] as const;
export type TooltipTrigger = (typeof TOOLTIP_TRIGGERS)[number];

export const TOOLTIP_VARIANTS = ['default', 'with-arrow', 'simple'] as const;
export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number];
