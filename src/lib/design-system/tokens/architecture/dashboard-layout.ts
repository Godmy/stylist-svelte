export const DASHBOARD_LAYOUT_VARIANTS = [
    'default',
    'compact',
    'spacious'
] as const;
export type DashboardLayoutVariant = (typeof DASHBOARD_LAYOUT_VARIANTS)[number];
