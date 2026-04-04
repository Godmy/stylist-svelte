export function getSharedPasswordInputContainerClass(error: boolean): string {
	return `relative ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-primary]'}`;
}
