export function formatMediaFileSize(bytes: number): string {
	if (bytes < 1024) return bytes + ' B';
	else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
	else return (bytes / 1048576).toFixed(1) + ' MB';
}

export function formatMediaDate(date: Date): string {
	return date.toLocaleDateString([], {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
