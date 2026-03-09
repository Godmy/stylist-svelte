export const TRIGGERS = ['hover', 'click', 'focus'] as const;
export type TooltipTrigger = (typeof TRIGGERS)[number];

