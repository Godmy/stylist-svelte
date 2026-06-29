import type { CopyCode } from '$stylist/development/type/struct/copy-code';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

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

export function createCodeWithCopyState(
	props: CopyCode,
	dispatch: (event: string, detail?: unknown) => void
) {
	const copied = $state(false);

	const containerClass = $derived('c-code-with-copy relative group');
	const codeContentClass = $derived('code-content');
	const copyButtonClass = $derived(
		'absolute right-2 top-2 rounded-md bg-[var(--color-background-secondary)] p-1.5 opacity-[var(--opacity-0)] transition-colors transition-opacity hover:bg-[var(--color-neutral-200)] group-hover:opacity-[var(--opacity-100)]'
	);
	const iconClass = (isCopied: boolean) =>
		mergeClassNames('h-4 w-4', isCopied ? 'text-[var(--color-success-600)]' : '');

	function handleCopyToClipboard() {
		copyToClipboard(
			copied,
			props.copySuccessMessage ?? 'Copied to clipboard!',
			props.copyErrorMessage ?? 'Failed to copy',
			dispatch
		);
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
