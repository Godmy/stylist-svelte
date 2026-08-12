import type { FileType } from '$stylist/file/type/object/common/file-type';

export type FileItem = {
	id: string;
	name: string;
	type: FileType;
	size?: number;
	modified?: Date;
	created?: Date;
	path?: string;
	thumbnail?: string;
	permissions?: string;
	owner?: string;
	icon?: string;
	selected?: boolean;
};
