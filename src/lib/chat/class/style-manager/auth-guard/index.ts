export class AuthGuardStyleManager {
	static getRootClasses(hostClass: string): string {
		return `${'c-auth-guard'} ${hostClass}`.trim();
	}

	static getSectionClasses(fallbackClass: string): string {
		return `${'flex flex-col items-center justify-center gap-[--spacing-sm] rounded-[1.5rem] border border-[--color-border-primary] bg-[--color-background-primary] px-6 py-7 text-center shadow-custom28'} ${fallbackClass}`.trim();
	}

	static getTitleClasses(contentClass: string): string {
		return `${'text-lg font-semibold tracking-[0.01em] text-[--color-text-primary]'} ${contentClass}`.trim();
	}

	static getTextClasses(contentClass: string): string {
		return `${'max-w-[40ch] text-sm leading-6 text-[--color-text-secondary]'} ${contentClass}`.trim();
	}

	static getActionLinkClasses(): string {
		return 'inline-flex items-center rounded-full bg-[--color-primary-600] px-4 py-2 text-sm font-medium text-[--color-text-inverse] transition-colors hover:bg-[--color-primary-700]';
	}
}

