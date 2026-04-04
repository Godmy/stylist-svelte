export function getSharedPasswordInputHelpTextClass(error: boolean): string {
	return `mt-1 text-sm ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-secondary]'}`;
}
