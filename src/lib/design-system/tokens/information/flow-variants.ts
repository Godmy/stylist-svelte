/** Flow/progress variants. */
export const FLOW_VARIANTS = ['completed', 'current', 'upcoming', 'skipped'] as const;
export type FlowVariant = (typeof FLOW_VARIANTS)[number];
