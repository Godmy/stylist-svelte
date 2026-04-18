import { clsx } from 'clsx';
import type { ClassValue } from '$stylist/information/type/script/join-tailwind-class-names';

export function joinTailwindClassNames(...inputs: ClassValue[]): string {
	return clsx(inputs);
}
