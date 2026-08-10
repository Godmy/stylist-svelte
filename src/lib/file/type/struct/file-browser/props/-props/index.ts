import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
﻿import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export type Props = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
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
