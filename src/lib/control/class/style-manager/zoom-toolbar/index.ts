export class ZoomToolbarStyleManager {
	static root(className = ''): string {
		return `zoom-controls flex items-center border border-[var(--color-border-primary)] rounded-md ${className}`.trim();
	}

	static button(className = ''): string {
		return `border-l border-[var(--color-border-primary)] ${className}`.trim();
	}

	static firstButton(className = ''): string {
		return `border-r border-[var(--color-border-primary)] ${className}`.trim();
	}

	static percentage(): string {
		return 'px-3 py-1 text-sm font-medium min-w-[50px] text-center';
	}
}
