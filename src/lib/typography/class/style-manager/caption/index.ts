export class StyleManagerCaption {
	static root(className?: string): string {
		return `text-sm text-[--color-text-secondary] ${className ?? ''}`.trim();
	}
}
