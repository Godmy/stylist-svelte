import type { FileSystemItemType } from '$stylist/file/type/struct/file-system-item-type';

export interface SlotFileSystemItem {
	id: string;
	name: string;
	type: FileSystemItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
}
