export function detectClipboardSupport(): boolean {
	return typeof navigator !== 'undefined' && 'clipboard' in navigator;
}

export const isClipboardSupported = detectClipboardSupport;
