export const getPictureToolbarContainerClasses = (className = '') =>
	['flex items-center gap-2 rounded-lg border border-[--color-border-muted] p-1', className]
		.filter(Boolean)
		.join(' ');

export const getPictureToolbarButtonClasses = () =>
	'inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-[--color-surface-muted]';
