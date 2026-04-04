export function getSharedPasswordInputToggleButtonClass(disabled: boolean): string {
	return `absolute inset-y-0 right-0 flex items-center pr-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;
}
