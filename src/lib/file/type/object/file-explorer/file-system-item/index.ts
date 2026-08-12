import type { FileItemType } from '$stylist/file/type/alias/file-item-type';

// SlotFileSystemItem type
export type SlotFileSystemItem = {
	id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
};

