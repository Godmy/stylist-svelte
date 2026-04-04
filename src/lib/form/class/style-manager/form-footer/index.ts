export class FormFooterStyleManager {
	static root(className = ''): string {
		return `border-t border-[var(--color-border-primary)] pt-5 ${className}`.trim();
	}

	static secondaryButton(disabled: boolean, className = ''): string {
		return `px-4 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''} ${className}`.trim();
	}

	static primaryButton(disabled: boolean, className = ''): string {
		return `px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''} ${className}`.trim();
	}
}
