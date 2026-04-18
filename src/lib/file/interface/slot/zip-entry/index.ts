import type { Snippet } from 'svelte';
import type { ZipEntryType } from '$stylist/file/type/struct/zip-viewer/entry-type';

export interface SlotZipEntry {
	id: string;
	name: string;
	type: ZipEntryType;
	size?: number;
	compressedSize?: number;
	modified?: Date;
	isText?: boolean;
	path: string;
	parentPath?: string;
}
