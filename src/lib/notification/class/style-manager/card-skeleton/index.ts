export class CardSkeletonStyleManager {
	static root(className = ''): string {
		return `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`.trim();
	}

	static card(): string {
		return 'overflow-hidden rounded-lg bg-[var(--color-background-primary)] p-6 shadow';
	}
}
