import { mergeClassNames, type ClassValue } from '$stylist/information/function/script/merge-class-names';

export function mergeTailwindClassNames(...inputs: ClassValue[]): string {
	return mergeClassNames(...inputs);
}
