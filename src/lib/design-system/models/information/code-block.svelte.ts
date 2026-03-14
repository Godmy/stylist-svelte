import { mergeClasses } from '$stylist/utils/classes';
import type { CodeProps } from '$stylist/design-system/contracts';
import { BadgeStyleManager } from '$stylist/design-system/styles/information/badge';

/**
 * Code state creator
 * Provides reactive state management for code block components using Svelte 5 runes
 *
 * @param props - Code component props
 * @returns Reactive state object with classes and computed values
 */
export function createCodeState(props: CodeProps) {
	const language = $derived(props.language ?? 'text');
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const classes = $derived(
		mergeClasses(
			'rounded-md overflow-x-auto font-mono',
			BadgeStyleManager.getCodeVariantClass(variant as CodeProps['variant']),
			BadgeStyleManager.getCodeSizeClass(size as CodeProps['size']),
			props.class ?? ''
		)
	);

	return {
		get language() {
			return language;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get showLineNumbers() {
			return showLineNumbers;
		},
		get startLineNumber() {
			return startLineNumber;
		},
		get classes() {
			return classes;
		}
	};
}

export default createCodeState;



