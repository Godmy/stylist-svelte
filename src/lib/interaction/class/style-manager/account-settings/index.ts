export class AccountSettingsStyleManager {
	static form(base: string, className?: string): string {
		return `${base} space-y-6 ${className || ''}`.trim();
	}

	static field(base: string, className?: string): string {
		return `${base} space-y-2 ${className || ''}`.trim();
	}

	static label(base: string, className?: string): string {
		return `${base} block text-sm font-medium ${className || ''}`.trim();
	}

	static dangerZone(base: string, className?: string): string {
		return `${base} border border-[--color-danger-200] rounded-lg p-4 bg-[--color-danger-50] ${className || ''}`.trim();
	}

	static twoFactorSection(base: string, enabled?: boolean, className?: string): string {
		const enabledClass = enabled ? 'border-[--color-success-200] bg-[--color-success-50]' : 'border-[--color-border-secondary] bg-[--color-background-primary]';
		return `${base} ${enabledClass} border rounded-lg p-4 ${className || ''}`.trim();
	}
}
