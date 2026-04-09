export function joinClassNames(...classes: Array<string | undefined | false | null>): string {
	return classes.filter(Boolean).join(' ');
}
