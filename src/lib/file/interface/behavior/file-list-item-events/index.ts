import type { FileItemType } from '$stylist/file/type/alias/file-item-type';
export interface BehaviorFileListItemEvents {
	onItemSelect?: (item: {
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
}) => void;
	onItemDoubleClick?: (item: {
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
}) => void;
	onItemAction?: (item: {
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
}, action: string) => void;
}
