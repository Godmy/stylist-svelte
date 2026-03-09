/** Layout/content density tokens. */
export const DENSITIES = ['default', 'compact', 'spacious'] as const;
export type Density = (typeof DENSITIES)[number];

export type DashboardLayoutVariant = Density;
