export const IMAGE_WITH_CAPTION_CLASSES = {
	hostBase: 'image-with-caption flex flex-col',
	imageBase: 'w-full object-cover',
	text: 'mt-2 text-center text-sm text-[var(--color-text-secondary)]',
	caption: 'text-sm text-[--color-text-secondary]',
	decoration: {
		rounded: 'rounded-lg',
		bordered: 'border border-[var(--color-border-primary)]',
		shadow: 'shadow-md'
	}
} as const;
