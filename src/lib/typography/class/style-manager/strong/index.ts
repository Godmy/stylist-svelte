export class StyleManagerStrong {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return `font-bold ${disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'} ${block ? 'block' : ''} ${className ?? ''}`.trim();
	}
}
