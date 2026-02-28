export const SIDEBAR_VARIANTS = ['default', 'compact', 'minimal'] as const;
export type SidebarVariant = (typeof SIDEBAR_VARIANTS)[number];

export const SIDEBAR_POSITIONS = ['left', 'right', 'top', 'bottom'] as const;
export type SidebarPosition = (typeof SIDEBAR_POSITIONS)[number];
