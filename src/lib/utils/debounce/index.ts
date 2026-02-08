/**
 * Debounce utility function for Svelte 5
 * Delays execution of a function until after a specified time interval
 */

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
	let timeoutId: number | null = null;

	return ((...args: any[]) => {
		if (timeoutId) {
			window.clearTimeout(timeoutId);
		}

		timeoutId = window.setTimeout(() => {
			fn(...args);
		}, delay);
	}) as T;
}
