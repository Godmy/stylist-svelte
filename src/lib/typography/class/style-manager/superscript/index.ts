export class StyleManagerSuperscript {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return `text-xs align-super ${disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'} ${block ? 'block' : ''} ${className ?? ''}`.trim();
	}
}
