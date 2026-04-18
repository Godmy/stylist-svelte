import { mergeClassNames } from '$stylist/information/function/script/merge-class-names';
import type { ClassValue } from '$stylist/information/type/script/merge-class-names';

export function mergeTailwindClassNames(...inputs: ClassValue[]): string {
	return mergeClassNames(...inputs);
}
