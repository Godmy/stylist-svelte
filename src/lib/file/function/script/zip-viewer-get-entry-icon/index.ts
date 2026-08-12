import type { SlotZipEntry } from '$stylist/file/type/object/zip-viewer/entry';

export function getEntryIcon(entry: SlotZipEntry): string {
	return entry.type === 'directory' ? 'folder' : 'file';
}
