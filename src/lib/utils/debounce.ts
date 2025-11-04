/**
 * Debounce and throttle utilities
 */

export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	return function executedFunction(...args: Parameters<T>) {
		const later = () => {
			timeout = null;
			func(...args);
		};

		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(later, wait);
	};
}

export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle: boolean;

	return function executedFunction(...args: Parameters<T>) {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
}

export async function debounceAsync<T extends (...args: unknown[]) => Promise<unknown>>(
	func: T,
	wait: number
): Promise<(...args: Parameters<T>) => Promise<void>> {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	return async function executedFunction(...args: Parameters<T>): Promise<void> {
		const later = async () => {
			timeout = null;
			await func(...args);
		};

		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(later, wait);
	};
}
