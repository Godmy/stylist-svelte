export class StyleManagerStrikeThrough {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return `line-through ${disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'} ${block ? 'block' : ''} ${className ?? ''}`.trim();
	}
}

export const StyleManagerStrikeThrought = StyleManagerStrikeThrough;
