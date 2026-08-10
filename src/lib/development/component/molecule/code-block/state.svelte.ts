import type { RecipeCodeBlock } from '$stylist/development/interface/recipe/code-block';
import { copyToClipboard } from '$stylist/development/function/script/code-block';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createCodeBlockState(props: RecipeCodeBlock) {
	let copied = $state(false);
	const codeLines = $derived(props.code?.split('\n') ?? []);
	const languageClass = $derived(`language-${props.language ?? 'text'}`);
	const containerClass = $derived(mergeClassNames('c-code-block', props.class ?? ''));
	const headerClassComputed = $derived(
		mergeClassNames('c-code-block__header', props.headerClass ?? '')
	);
	const lineNumbersContainerClass = $derived(
		mergeClassNames('c-code-block__line-numbers', props.lineNumberClass ?? '')
	);
	const lineNumberItemClass = (isHighlighted: boolean) =>
		mergeClassNames(
			'c-code-block__line-number',
			isHighlighted ? 'c-code-block__line-number--highlighted' : ''
		);
	const contentContainerClass = $derived(
		mergeClassNames('c-code-block__content', props.contentClass ?? '')
	);
	const preClass = $derived(mergeClassNames('c-code-block__pre', props.codeClass ?? ''));
	const copyButtonContainerClass = 'c-code-block__copy';
	const iconClass = 'c-code-block__icon';
	const getMainContentClass = 'c-code-block__main';

	function handleCopy() {
		copyToClipboard(props.code ?? '', (copiedValue) => {
			copied = copiedValue;
		});
	}

	return {
		get copied() {
			return copied;
		},
		get codeLines() {
			return codeLines;
		},
		get languageClass() {
			return languageClass;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClassComputed() {
			return headerClassComputed;
		},
		get lineNumbersContainerClass() {
			return lineNumbersContainerClass;
		},
		lineNumberItemClass,
		get contentContainerClass() {
			return contentContainerClass;
		},
		get preClass() {
			return preClass;
		},
		get copyButtonContainerClass() {
			return copyButtonContainerClass;
		},
		get iconClass() {
			return iconClass;
		},
		get getMainContentClass() {
			return getMainContentClass;
		},
		handleCopy
	};
}
