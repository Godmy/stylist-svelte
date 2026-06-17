import type { FileType } from '$stylist/file/type/struct/file-explorer/file-type';

export interface SlotFileSystemItem {
	id: string;
	name: string;
	type: FileType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
}
