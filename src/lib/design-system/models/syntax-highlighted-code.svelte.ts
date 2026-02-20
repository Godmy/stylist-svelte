import type { SyntaxHighlightedCodeProps } from '$stylist/design-system/props';
import {
	SYNTAX_HIGHLIGHTED_CODE_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
	CODE_BLOCK_VARIANT_CLASSES,
	CODE_BLOCK_SIZE_CLASSES
} from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

/**
 * SyntaxHighlightedCode state creator
 * Provides reactive state management for syntax highlighted code components using Svelte 5 runes
 *
 * @param props - SyntaxHighlightedCode component props
 * @returns Reactive state object with classes and computed values
 */
export function createSyntaxHighlightedCodeState(props: SyntaxHighlightedCodeProps) {
	const language = $derived(props.language ?? 'text');
	const code = $derived(props.code ?? '');
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const containerClasses = $derived(
		cn(
			SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
			CODE_BLOCK_VARIANT_CLASSES[variant as keyof typeof CODE_BLOCK_VARIANT_CLASSES],
			CODE_BLOCK_SIZE_CLASSES[size as keyof typeof CODE_BLOCK_SIZE_CLASSES],
			props.class ?? ''
		)
	);
	const codeClasses = $derived(SYNTAX_HIGHLIGHTED_CODE_CLASSES);
	const escapedCode = $derived(
		code
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
	);

	return {
		get language() {
			return language;
		},
		get code() {
			return code;
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
		get containerClasses() {
			return containerClasses;
		},
		get codeClasses() {
			return codeClasses;
		},
		get escapedCode() {
			return escapedCode;
		}
	};
}

export default createSyntaxHighlightedCodeState;
