import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ClassValue = import('clsx').ClassValue;

export function mergeClassNames(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
