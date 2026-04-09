export function resolveFileIcon(type: string): string {
	const iconByType: Record<string, string> = {
		folder: 'folder',
		image: 'image',
		video: 'video',
		audio: 'music',
		archive: 'archive',
		text: 'file-text',
		document: 'file-text',
		code: 'code'
	};

	return iconByType[type] || 'file';
}
