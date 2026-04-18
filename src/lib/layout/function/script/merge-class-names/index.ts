import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from '$stylist/layout/type/script/merge-class-names';

export function mergeClassNames(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
