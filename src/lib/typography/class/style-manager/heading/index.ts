export class StyleManagerHeading {
	static root(className?: string): string {
		return `text-xl font-bold ${className ?? ''}`.trim();
	}
}
