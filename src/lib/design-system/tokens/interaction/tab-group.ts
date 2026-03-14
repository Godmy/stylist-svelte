export const TAB_GROUP_VARIANTS = ['line', 'boxed', 'pill'] as const;
export type TabGroupVariant = (typeof TAB_GROUP_VARIANTS)[number];
