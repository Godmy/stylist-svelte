export class SecuritySettingsStyleManager {
	static preferences(base: string, className?: string): string {
		return `${base} ${className || ''}`.trim();
	}

	static level(base: string, level?: 'low' | 'medium' | 'high', className?: string): string {
		const levelClasses = {
			low: 'text-[--color-danger-600]',
			medium: 'text-[--color-warning-600]',
			high: 'text-[--color-success-600]'
		};

		const levelClass = level ? levelClasses[level] : '';
		return `${base} ${levelClass} ${className || ''}`.trim();
	}

	static session(base: string, current?: boolean, className?: string): string {
		const currentClass = current ? 'border-[--color-info-200] bg-[--color-info-50]' : 'border-[--color-border-secondary] bg-[--color-background-primary]';
		return `${base} ${currentClass} border rounded-lg p-4 ${className || ''}`.trim();
	}

	static sessionDevice(base: string, className?: string): string {
		return `${base} font-medium ${className || ''}`.trim();
	}

	static sessionMeta(base: string, className?: string): string {
		return `${base} text-sm text-[--color-text-secondary] ${className || ''}`.trim();
	}

	static twoFactorSetup(base: string, className?: string): string {
		return `${base} border rounded-lg p-4 bg-[var(--color-background-secondary)] ${className || ''}`.trim();
	}
}
