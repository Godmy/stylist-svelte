export const SIDEBAR_VARIANTS = ['default', 'compact', 'minimal'] as const;
export type SidebarVariant = (typeof SIDEBAR_VARIANTS)[number];
