import type { RecipeCodeEditor } from '$stylist/development/interface/recipe/code-editor';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createCodeEditorState(props: RecipeCodeEditor & { class?: string }) {
	let internalCode = $state(props.code ?? '');
	$effect(() => {
		internalCode = props.code ?? '';
	});

	const containerClass = $derived(mergeClassNames('c-code-editor', props.class ?? ''));

	function handleCodeChange(newValue: string) {
		internalCode = newValue;
		props.onCodeChange?.(newValue);
	}

	function handleCopy() {
		navigator.clipboard.writeText(internalCode);
	}

	function handleDownload() {
		const blob = new Blob([internalCode], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = `code.${props.language ?? 'javascript'}`;
		anchor.click();
		URL.revokeObjectURL(url);
	}

	return {
		get internalCode() {
			return internalCode;
		},
		get containerClass() {
			return containerClass;
		},
		handleCodeChange,
		handleCopy,
		handleDownload
	};
}
