export class StyleManagerThemeSurface {
	private static joinClasses(...values: Array<string | null | undefined>): string {
		return values
			.filter(Boolean)
			.map((value) => String(value).trim())
			.filter(Boolean)
			.join(' ');
	}

	static root(className?: string): string {
		return StyleManagerThemeSurface.joinClasses('c-theme-surface', className);
	}

	static header(className?: string): string {
		return StyleManagerThemeSurface.joinClasses('c-theme-surface__header', className);
	}

	static content(className?: string): string {
		return StyleManagerThemeSurface.joinClasses('c-theme-surface__content', className);
	}

	static footer(className?: string): string {
		return StyleManagerThemeSurface.joinClasses('c-theme-surface__footer', className);
	}

	static getStyleSheet(): string {
		return `
			.c-theme-surface {
				display: grid;
				gap: var(--spacing-3, 0.75rem);
				padding: var(--spacing-4, 1rem);
				border: 1px solid var(--line, var(--color-border-primary));
				border-radius: var(--border-radius-2xl, 1.25rem);
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 96%, var(--accent, var(--color-primary-600)) 4%),
						var(--surface, var(--color-background-primary))
					);
				color: var(--text, var(--color-text-primary));
				box-shadow: var(--shadow-custom45, 0 12px 32px rgba(15, 23, 42, 0.08));
			}

			.c-theme-surface__header,
			.c-theme-surface__footer {
				display: grid;
				gap: var(--spacing-2, 0.5rem);
			}

			.c-theme-surface__content {
				display: grid;
				gap: var(--spacing-3, 0.75rem);
			}
		`;
	}
}
