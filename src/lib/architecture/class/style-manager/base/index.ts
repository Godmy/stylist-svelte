const joinClassNames = (...classNames: Array<string | false | null | undefined>): string =>
	classNames.filter(Boolean).join(' ');

const normalizeKeys = <TKey extends string>(keys: TKey | readonly TKey[]): readonly TKey[] =>
	(Array.isArray(keys) ? [...keys] : [keys]) as readonly TKey[];

export class StyleManagerBase {
	static readonly classes = {
		interactive: 'inline-flex items-center justify-center font-medium rounded-md transition-colors',
		surface: 'bg-[var(--color-background-primary)] border border-[var(--color-border-primary)]',
		elevated: 'bg-[var(--color-background-primary)] shadow-[var(--shadow-md)]',
		text: 'text-[var(--color-text-primary)]',
		input:
			'w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 text-sm placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2',
		card: 'rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm'
	} as const;

	static getClass(key: keyof typeof StyleManagerBase.classes, additionalClass = ''): string {
		return joinClassNames(StyleManagerBase.classes[key], additionalClass);
	}

	static getClasses(
		keys: keyof typeof StyleManagerBase.classes | readonly (keyof typeof StyleManagerBase.classes)[],
		additionalClass = ''
	): string {
		return joinClassNames(...normalizeKeys(keys).map((key) => StyleManagerBase.classes[key]), additionalClass);
	}
}
