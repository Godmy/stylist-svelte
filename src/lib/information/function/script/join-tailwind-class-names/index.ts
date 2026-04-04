import { clsx } from 'clsx';

export type ClassValue =
	| string
	| number
	| bigint
	| null
	| undefined
	| boolean
	| { [key: string]: boolean }
	| Iterable<ClassValue>;

export function joinTailwindClassNames(...inputs: ClassValue[]): string {
	return clsx(inputs);
}

export const twJoin = joinTailwindClassNames;
