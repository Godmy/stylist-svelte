import { detectClipboardSupport } from '$stylist/interaction/function/script/detect-clipboard-support';

export function copyTextToClipboard(text: string): Promise<boolean> {
	return (async () => {
	if (!detectClipboardSupport()) {
		console.error('Clipboard API is not supported in this browser');
		return false;
	}

	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (error) {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.style.position = 'fixed';
		textarea.style.opacity = '0';
		document.body.appendChild(textarea);
		textarea.select();

		try {
			document.execCommand('copy');
			return true;
		} catch (execError) {
			console.error('Failed to copy to clipboard', execError);
			return false;
		} finally {
			document.body.removeChild(textarea);
		}
	}
	})();
}
