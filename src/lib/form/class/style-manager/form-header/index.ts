export class FormHeaderStyleManager {
	static root(className = ''): string {
		return `border-b border-[var(--color-border-primary)] pb-5 ${className}`.trim();
	}

	static backButton(className = ''): string {
		return `mr-4 -ml-4 p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] ${className}`.trim();
	}

	static title(className = ''): string {
		return `text-2xl font-bold text-[var(--color-text-primary)] ${className}`.trim();
	}

	static subtitle(className = ''): string {
		return `mt-1 text-sm text-[var(--color-text-secondary)] ${className}`.trim();
	}

	static description(className = ''): string {
		return `mt-2 text-sm text-[var(--color-text-secondary)] ${className}`.trim();
	}

	static actions(className = ''): string {
		return `${className}`.trim();
	}
}
