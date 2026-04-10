import type { CodeBlockProps } from '$stylist/development/type/struct/code-block';
import { copyToClipboard } from '$stylist/development/function/script/code-block';
import { CodeStyleManager } from '$stylist/development/class/style-manager/code-block';

export function createCodeBlockState(props: CodeBlockProps) {
	let copied = $state(false);
	let codeLines = $derived(props.code?.split('\n') ?? []);
	let languageClass = $derived(`language-${props.language ?? 'text'}`);
	const containerClass = $derived(CodeStyleManager.getContainerClass(props.class ?? ''));
	const headerClassComputed = $derived(CodeStyleManager.getHeaderClass(props.headerClass ?? ''));
	const lineNumbersContainerClass = $derived(CodeStyleManager.getLineNumbersContainerClass(props.lineNumberClass ?? ''));
	const lineNumberItemClass = (isHighlighted: boolean) => CodeStyleManager.getLineNumberItemClass(isHighlighted);
	const contentContainerClass = $derived(CodeStyleManager.getContentContainerClass(props.contentClass ?? ''));
	const preClass = $derived(CodeStyleManager.getPreClass(props.codeClass ?? ''));
	const copyButtonContainerClass = $derived(CodeStyleManager.getCopyButtonContainerClass());
	const iconClass = $derived(CodeStyleManager.getIconClass());
	const getMainContentClass = $derived(CodeStyleManager.getMainContentClass());

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

export default createCodeBlockState;
