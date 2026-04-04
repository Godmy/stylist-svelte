export class ConfirmationDialogStyleManager {
	static overlay(className = ''): string {
		return `fixed inset-0 z-[var(--z-index-overlay)] flex items-center justify-center bg-[var(--color-neutral-900)]/40 ${className}`.trim();
	}

	static content(className = ''): string {
		return `w-full max-w-lg rounded-lg bg-[var(--color-background-primary)] p-6 shadow-lg ${className}`.trim();
	}

	static header(className = ''): string {
		return `text-lg font-semibold ${className}`.trim();
	}

	static body(className = ''): string {
		return `mt-2 ${className}`.trim();
	}

	static footer(className = ''): string {
		return `mt-6 flex justify-end space-x-3 ${className}`.trim();
	}
}
