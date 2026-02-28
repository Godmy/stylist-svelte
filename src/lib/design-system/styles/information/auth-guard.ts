export class AuthGuardStyleManager {
	static getRootClasses(hostClass: string): string {
		return `${'c-auth-guard'} ${hostClass}`.trim();
	}

	static getSectionClasses(fallbackClass: string): string {
		return `${'flex flex-col items-center justify-center gap-[--spacing-sm] rounded-[--radius-lg] border border-[--color-border-default] bg-[--color-background-primary] p-[--spacing-xl] text-center'} ${fallbackClass}`.trim();
	}

	static getTitleClasses(contentClass: string): string {
		return `${'text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]'} ${contentClass}`.trim();
	}

	static getTextClasses(contentClass: string): string {
		return `${'max-w-[40ch] text-[--text-size-sm] text-[--color-text-secondary]'} ${contentClass}`.trim();
	}

	static getActionLinkClasses(): string {
		return 'inline-flex items-center rounded-[--radius-md] bg-[--color-primary-600] px-[--spacing-md] py-[--spacing-sm] text-[--text-size-sm] font-[--font-weight-medium] text-[--color-text-inverse] transition-colors hover:bg-[--color-primary-700]';
	}
}
