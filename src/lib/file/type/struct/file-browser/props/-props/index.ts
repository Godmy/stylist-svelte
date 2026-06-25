import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';
import type { RestProps } from '$stylist/file/type/struct/file-browser/props/rest-props';

export type Props = RestProps & {
	items: SlotFolderItem[];
	class?: string;
	itemClass?: string;
	contentClass?: string;
	onItemSelect?: (item: SlotFolderItem) => void;
	onItemToggle?: (item: SlotFolderItem, expanded: boolean) => void;
	onItemAction?: (item: SlotFolderItem, action: string) => void;
	showItemCount?: boolean;
	enableSelection?: boolean;
	defaultExpanded?: boolean;
	disabled?: boolean;
};
