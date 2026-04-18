import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import { SortableGridStyleManager } from '$stylist/control/class/style-manager/sortable-grid';
import type { SortableGridItem } from '$stylist/control/type/alias/sortable-grid-item';
import type { SortableGridProps } from '$stylist/control/type/alias/sortable-grid-props';

const gridColsMap: Record<number | string, string> = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4', 5: 'grid-cols-5', 6: 'grid-cols-6' };
const gapMap: Record<string, string> = { none: 'gap-0', sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };

export function createSortableGridState(props: SortableGridProps) {
	const items = $derived(props.items ?? []);
	const className = $derived(props.class ?? '');
	const itemClass = $derived(props.itemClass ?? '');
	const cols = $derived(typeof props.cols === 'number' ? props.cols : 3);
	const gap = $derived((props.gap ?? 'md') as keyof typeof gapMap);
	const draggable = $derived(props.draggable ?? true);

	const gridColsClass = $derived(
		typeof cols === 'number' ? gridColsMap[cols as keyof typeof gridColsMap] ?? 'grid-cols-3' : gridColsMap[cols] ?? 'grid-cols-3'
	);
	const gapClass = $derived(gapMap[gap] ?? 'gap-4');

	let draggedItem = $state<SortableGridItem | null>(null);
	let draggedOverIndex = $state<number | null>(null);

	function handleDragStart(e: DragEvent, item: SortableGridItem, index: number) {
		draggedItem = item;
		e.dataTransfer?.setData('text/plain', item.id);
	}

	function handleDragOver(e: DragEvent, index: number) {
		e.preventDefault();
		draggedOverIndex = index;
	}

	function handleDragLeave() {
		draggedOverIndex = null;
	}

	function handleDrop(e: DragEvent, dropIndex: number) {
		e.preventDefault();
		draggedOverIndex = null;

		if (!draggedItem) return;

		if (dropIndex !== items.findIndex(item => item.id === draggedItem!.id)) {
			const newItems = [...items];
			const dragIndex = newItems.findIndex(item => item.id === draggedItem!.id);
			const [removed] = newItems.splice(dragIndex, 1);
			const adjustedDropIndex = dropIndex > dragIndex ? dropIndex - 1 : dropIndex;
			newItems.splice(adjustedDropIndex, 0, removed);
			props.onItemsChange?.(newItems);
		}

		draggedItem = null;
	}

	function handleDragEnd() {
		draggedItem = null;
		draggedOverIndex = null;
	}

	const containerClass = $derived(
		SortableGridStyleManager.getContainerClass('default', 'md', !draggable, className)
	);

	return {
		get items() { return items; },
		get className() { return className; },
		get itemClass() { return itemClass; },
		get cols() { return cols; },
		get gap() { return gap; },
		get draggable() { return draggable; },
		get gridColsClass() { return gridColsClass; },
		get gapClass() { return gapClass; },
		get containerClass() { return containerClass; },
		get draggedItem() { return draggedItem; },
		get draggedOverIndex() { return draggedOverIndex; },
		handleDragStart,
		handleDragOver,
		handleDragLeave,
		handleDrop,
		handleDragEnd
	};
}

export default createSortableGridState;
