/** Appearance variants. */
export const APPEARANCE_STYLES = ['solid', 'outline', 'ghost', 'link', 'subtle'] as const;
export type AppearanceStyle = (typeof APPEARANCE_STYLES)[number];
