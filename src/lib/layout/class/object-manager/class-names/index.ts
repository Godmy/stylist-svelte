import type { ClassValue } from '$stylist/layout/type/alias/class-value';

export class ClassNamesManager {
	private static toClassString(value: ClassValue): string {
		if (!value && value !== 0) return '';
		if (typeof value === 'string') return value;
		if (typeof value === 'number') return String(value);
		if (typeof value === 'bigint') return String(value);
		if (Array.isArray(value)) return value.map((item) => ClassNamesManager.toClassString(item)).filter(Boolean).join(' ');
		if (typeof value === 'object') {
			return Object.entries(value)
				.filter(([, v]) => Boolean(v))
				.map(([k]) => k)
				.join(' ');
		}
		return '';
	}

	static join(...classes: Array<string | undefined | false | null>): string {
		return classes.filter(Boolean).join(' ');
	}

	static merge(...inputs: ClassValue[]): string {
		return inputs.map((input) => ClassNamesManager.toClassString(input)).filter(Boolean).join(' ');
	}
}
