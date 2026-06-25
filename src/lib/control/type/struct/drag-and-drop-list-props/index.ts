import type { DragAndDropListItem } from '$stylist/control/type/struct/drag-and-drop-list-item';
import type { DragAndDropListRestProps } from '$stylist/control/type/struct/drag-and-drop-list-rest-props';

export type DragAndDropListProps = DragAndDropListRestProps & {
	items: DragAndDropListItem[];
	class?: string;
	itemClass?: string;
	headerClass?: string;
	bodyClass?: string;
	onItemsChange?: (items: DragAndDropListItem[]) => void;
	onItemDragStart?: (item: DragAndDropListItem) => void;
	onItemDragEnd?: (item: DragAndDropListItem) => void;
	disabled?: boolean;
	variant?: 'minimal' | 'card';
};
