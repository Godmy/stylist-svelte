/** Inline code variant tokens */
export const INLINE_CODE_VARIANTS = ['default', 'subtle'] as const;
export type InlineCodeVariant = (typeof INLINE_CODE_VARIANTS)[number];
