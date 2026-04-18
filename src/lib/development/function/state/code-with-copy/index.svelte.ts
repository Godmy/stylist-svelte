import { CodeWithCopyStyleManager } from '$stylist/development/class/style-manager/code-with-copy';
import type { Props } from '$stylist/development/type/alias/props';

function copyToClipboard(
	copied: boolean,
	copySuccessMessage: string,
	copyErrorMessage: string,
	dispatch: (event: string, detail?: unknown) => void
): Promise<void> {
	return Promise.resolve().then(async () => {
		const codeElement = document.querySelector<HTMLElement>('.code-content');
		if (!codeElement) return;

		try {
			const code = codeElement.textContent || '';
			await navigator.clipboard.writeText(code);
			copied = true;
			dispatch('copySuccess', { message: copySuccessMessage });
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy code:', err);
			dispatch('copyError', { message: copyErrorMessage });
		}
	});
}

export function createCodeWithCopyState(props: Props, dispatch: (event: string, detail?: unknown) => void) {
	let copied = $state(false);

	const containerClass = $derived(CodeWithCopyStyleManager.getContainerClass());
	const codeContentClass = $derived(CodeWithCopyStyleManager.getCodeContentClass());
	const copyButtonClass = $derived(CodeWithCopyStyleManager.getCopyButtonClass());
	const iconClass = (isCopied: boolean) => CodeWithCopyStyleManager.getIconClass(isCopied);

	function handleCopyToClipboard() {
		copyToClipboard(copied, props.copySuccessMessage ?? 'Copied to clipboard!', props.copyErrorMessage ?? 'Failed to copy', dispatch);
	}

	return {
		get copied() {
			return copied;
		},
		get containerClass() {
			return containerClass;
		},
		get codeContentClass() {
			return codeContentClass;
		},
		get copyButtonClass() {
			return copyButtonClass;
		},
		iconClass,
		handleCopyToClipboard
	};
}

export default createCodeWithCopyState;
