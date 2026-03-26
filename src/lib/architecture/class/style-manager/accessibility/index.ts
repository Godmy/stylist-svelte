const joinClassNames = (...classNames: Array<string | false | null | undefined>): string =>
	classNames.filter(Boolean).join(' ');

const normalizeKeys = <TKey extends string>(keys: TKey | readonly TKey[]): readonly TKey[] =>
	(Array.isArray(keys) ? [...keys] : [keys]) as readonly TKey[];

export class StyleManagerAccessibility {
	static readonly classes = {
		srOnly: 'sr-only',
		notSrOnly: 'not-sr-only',
		focusVisible:
			'focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary-500)] focus-visible:outline-offset-2',
		focusRing: 'focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-500)]',
		focusWithin:
			'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--color-primary-500)]'
	} as const;

	static getClass(key: keyof typeof StyleManagerAccessibility.classes, additionalClass = ''): string {
		return joinClassNames(StyleManagerAccessibility.classes[key], additionalClass);
	}

	static getClasses(
		keys:
			| keyof typeof StyleManagerAccessibility.classes
			| readonly (keyof typeof StyleManagerAccessibility.classes)[],
		additionalClass = ''
	): string {
		return joinClassNames(
			...normalizeKeys(keys).map((key) => StyleManagerAccessibility.classes[key]),
			additionalClass
		);
	}
}
