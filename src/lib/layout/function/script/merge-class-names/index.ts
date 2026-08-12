import type { ClassValue } from '$stylist/layout/type/alias/class-value';

function toClassString(value: ClassValue): string {
	if (!value && value !== 0) return '';
	if (typeof value === 'string') return value;
	if (typeof value === 'number') return String(value);
	if (typeof value === 'bigint') return String(value);
	if (Array.isArray(value)) return value.map(toClassString).filter(Boolean).join(' ');
	if (typeof value === 'object') {
		return Object.entries(value)
			.filter(([, v]) => Boolean(v))
			.map(([k]) => k)
			.join(' ');
	}
	return '';
}

export function mergeClassNames(...inputs: ClassValue[]): string {
	return inputs.map(toClassString).filter(Boolean).join(' ');
}
