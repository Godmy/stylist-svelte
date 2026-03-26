const joinClassNames = (...classNames: Array<string | false | null | undefined>): string =>
	classNames.filter(Boolean).join(' ');

const normalizeKeys = <TKey extends string>(keys: TKey | readonly TKey[]): readonly TKey[] =>
	(Array.isArray(keys) ? [...keys] : [keys]) as readonly TKey[];

export class StyleManagerState {
	static readonly classes = {
		disabled: 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none',
		loading: 'animate-spin',
		block: 'w-full',
		hidden: 'hidden',
		visible: 'visible',
		interactive: 'cursor-pointer',
		readonly: 'cursor-default'
	} as const;

	static getClass(key: keyof typeof StyleManagerState.classes, additionalClass = ''): string {
		return joinClassNames(StyleManagerState.classes[key], additionalClass);
	}

	static getClasses(
		keys: keyof typeof StyleManagerState.classes | readonly (keyof typeof StyleManagerState.classes)[],
		additionalClass = ''
	): string {
		return joinClassNames(...normalizeKeys(keys).map((key) => StyleManagerState.classes[key]), additionalClass);
	}
}
