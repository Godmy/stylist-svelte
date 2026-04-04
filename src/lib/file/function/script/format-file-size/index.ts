export function formatFileSize(bytes: number): string {
	if (bytes === 0) return '0 Bytes';
	const kiloBytes = 1024;
	const units = ['Bytes', 'KB', 'MB', 'GB'];
	const unitIndex = Math.floor(Math.log(bytes) / Math.log(kiloBytes));
	return `${parseFloat((bytes / Math.pow(kiloBytes, unitIndex)).toFixed(2))} ${units[unitIndex]}`;
}
