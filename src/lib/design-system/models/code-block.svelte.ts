import type { CodeBlockProps } from '$stylist/design-system/props';
import { BASE_CODE_BLOCK_CLASSES, CODE_BLOCK_VARIANT_CLASSES, CODE_BLOCK_SIZE_CLASSES } from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

/**
 * CodeBlock state creator
 * Provides reactive state management for code block components using Svelte 5 runes
 *
 * @param props - CodeBlock component props
 * @returns Reactive state object with classes and computed values
 */
export function createCodeBlockState(props: CodeBlockProps) {
	const language = $derived(props.language ?? 'text');
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const classes = $derived(
		cn(
			BASE_CODE_BLOCK_CLASSES,
			CODE_BLOCK_VARIANT_CLASSES[variant as keyof typeof CODE_BLOCK_VARIANT_CLASSES],
			CODE_BLOCK_SIZE_CLASSES[size as keyof typeof CODE_BLOCK_SIZE_CLASSES],
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

export default createCodeBlockState;
