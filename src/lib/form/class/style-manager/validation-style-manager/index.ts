/**
 * Validation Style Manager
 */
export class ValidationStyleManager {
	/**
	 * Get classes for validation success
	 */
	static success(base: string, className?: string): string {
		return `${base} text-[--color-success-600] ${className || ''}`.trim();
	}

	/**
	 * Get classes for validation error
	 */
	static error(base: string, className?: string): string {
		return `${base} text-[--color-danger-600] ${className || ''}`.trim();
	}

	/**
	 * Get classes for validation warning
	 */
	static warning(base: string, className?: string): string {
		return `${base} text-[--color-warning-600] ${className || ''}`.trim();
	}

	/**
	 * Get classes for password strength indicator
	 */
	static passwordStrength(base: string, strength?: 'weak' | 'medium' | 'strong', className?: string): string {
		const strengthClasses = {
			weak: 'bg-[--color-danger-500]',
			medium: 'bg-[--color-warning-500]',
			strong: 'bg-[--color-success-500]'
		};

		const strengthClass = strength ? strengthClasses[strength] : 'bg-[--color-neutral-300]';
		return `${base} ${strengthClass} h-1 rounded-full transition-all ${className || ''}`.trim();
	}

	/**
	 * Get classes for validation icon
	 */
	static icon(base: string, valid?: boolean, className?: string): string {
		const validClass = valid ? 'text-[--color-success-500]' : 'text-[--color-danger-500]';
		return `${base} ${validClass} ${className || ''}`.trim();
	}
}
