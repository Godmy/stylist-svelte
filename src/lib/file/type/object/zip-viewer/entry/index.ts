import type { FileItemType } from '$stylist/file/type/alias/file-item-type';

// SlotZipEntry type
export type SlotZipEntry = {
	id: string;
	name: string;
	type: FileItemType;
	size?: number; // in bytes
	compressedSize?: number;
	modified?: Date;
	isText?: boolean; // Is it a text file that can be viewed
	path: string;
	parentPath?: string;
};

