export class StyleManagerParagraph {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return `text-base ${disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'} ${block ? 'block' : ''} ${className ?? ''}`.trim();
	}
}
