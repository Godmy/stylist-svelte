/**
 * Handle file download by opening URL in new tab
 */
export function handleFileDownload(downloadUrl: string): void {
  window.open(downloadUrl, '_blank');
}
