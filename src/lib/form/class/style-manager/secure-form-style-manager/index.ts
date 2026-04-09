/**
 * Secure Form Style Manager
 */
export class SecureFormStyleManager {
	/**
	 * Get classes for secure form container
	 */
	static container(base: string, className?: string): string {
		return `${base} border-2 border-[--color-success-200] rounded-lg p-6 bg-[--color-success-50] ${className || ''}`.trim();
	}

	/**
	 * Get classes for encryption indicator
	 */
	static encryption(base: string, className?: string): string {
		return `${base} flex items-center gap-2 text-sm text-[--color-success-700] ${className || ''}`.trim();
	}

	/**
	 * Get classes for secure badge
	 */
	static secureBadge(base: string, className?: string): string {
		return `${base} inline-flex items-center gap-1 px-3 py-1 bg-[--color-success-600] text-[--color-text-inverse] text-xs font-medium rounded-full ${className || ''}`.trim();
	}

	/**
	 * Get classes for session timeout warning
	 */
	static timeoutWarning(base: string, className?: string): string {
		return `${base} fixed top-4 right-4 z-[var(--z-index-modal)] bg-[--color-warning-100] border border-[--color-warning-400] text-[--color-warning-700] px-4 py-3 rounded shadow-lg ${className || ''}`.trim();
	}

	/**
	 * Get classes for masked input
	 */
	static maskedInput(base: string, className?: string): string {
		return `${base} tracking-widest ${className || ''}`.trim();
	}
}
