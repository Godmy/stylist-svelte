export const FONT_FAMILY = {
	sans: 'Inter, system-ui, -apple-system, sans-serif',
	serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
	mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
} as const;

export type FontFamilyKey = keyof typeof FONT_FAMILY;
