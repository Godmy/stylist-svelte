import type { CodeEditorRecipe } from '$stylist/development/interface/recipe/code-editor';
import { CodeEditorStyleManager } from '$stylist/development/class/style-manager/code-editor';

export function createCodeEditorState(props: CodeEditorRecipe & { class?: string }) {
	let internalCode = $state(props.code ?? '');
	$effect(() => {
		internalCode = props.code ?? '';
	});

	const containerClass = $derived(CodeEditorStyleManager.root(props.class ?? ''));

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
		const a = document.createElement('a');
		a.href = url;
		a.download = `code.${props.language ?? 'javascript'}`;
		a.click();
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

export default createCodeEditorState;
