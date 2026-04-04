export class AutoSearchStyleManager {
	static root(className = ''): string {
		return `relative ${className}`.trim();
	}

	static input(): string {
		return 'w-full pl-10 pr-4 py-2 border border-[var(--color-border-primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
	}

	static iconWrapper(): string {
		return 'absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-tertiary)]';
	}
}
