export class CodeBlockManager {
	static copyToClipboard(code: string, onCopied: (copied: boolean) => void): void {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				onCopied(true);
				setTimeout(() => {
					onCopied(false);
				}, 2000);
			})
			.catch((error) => {
				console.error('Failed to copy code to clipboard:', error);
			});
	}
}
