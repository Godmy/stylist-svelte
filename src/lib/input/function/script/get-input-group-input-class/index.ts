export function getInputGroupInputClass(className = ''): string {
	return `rounded-none rounded-l-md focus:z-[var(--z-index-docked)] border-r-0 ${className}`.trim();
}
