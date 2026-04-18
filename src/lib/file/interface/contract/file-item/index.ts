import type { FileItemType } from '$stylist/file/type/struct/file-item-type';

export interface ContractFileItem {
	id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	path?: string;
	thumbnail?: string;
	permissions?: string;
	owner?: string;
	icon?: string;
	selected?: boolean;
}
