const CODE_VARIANTS = {
	block: ['default', 'terminal', 'diff'],
	inline: ['default', 'subtle']
} as const;

/** Code variants */
export const CODE = CODE_VARIANTS.block;
export type Code = (typeof CODE)[number];

/** Inline code variant tokens */
export const INLINE_CODE_VARIANTS = CODE_VARIANTS.inline;
export type InlineCodeVariant = (typeof INLINE_CODE_VARIANTS)[number];
