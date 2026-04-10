export function copyToClipboard(code: string, onCopied: (copied: boolean) => void) {
  navigator.clipboard.writeText(code)
    .then(() => {
      onCopied(true);
      setTimeout(() => {
        onCopied(false);
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy code to clipboard:', err);
    });
}
