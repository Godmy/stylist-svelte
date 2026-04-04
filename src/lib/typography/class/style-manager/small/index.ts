export class StyleManagerSmall {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return `text-sm ${disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-secondary)]'} ${block ? 'block' : ''} ${className ?? ''}`.trim();
	}
}
