export function getChatMessageAlignmentClass(isOwn: boolean): string {
	return isOwn ? 'justify-end' : 'justify-start';
}
