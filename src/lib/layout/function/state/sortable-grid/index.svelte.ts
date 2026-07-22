import type { SortableGridItem } from '$stylist/layout/type/alias/sortable-grid-item';
import type { SortableGridProps } from '$stylist/layout/type/alias/sortable-grid-props';

export function createSortableGridState(props: SortableGridProps) {
	const items = $derived(props.items ?? []);
	const className = $derived(props.class ?? '');
	const itemClass = $derived(props.itemClass ?? '');
	const cols = $derived(typeof props.cols === 'number' ? props.cols : 3);
	const gap = $derived((props.gap ?? 'md') as 'none' | 'sm' | 'md' | 'lg');
	const draggable = $derived(props.draggable ?? true);

	const containerClass = $derived(['c-sortable-grid', props.class].filter(Boolean).join(' '));

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

		if (dropIndex !== items.findIndex((item) => item.id === draggedItem!.id)) {
			const newItems = [...items];
			const dragIndex = newItems.findIndex((item) => item.id === draggedItem!.id);
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

	return {
		get items() {
			return items;
		},
		get className() {
			return className;
		},
		get itemClass() {
			return itemClass;
		},
		get cols() {
			return cols;
		},
		get gap() {
			return gap;
		},
		get draggable() {
			return draggable;
		},
		get containerClass() {
			return containerClass;
		},
		get draggedItem() {
			return draggedItem;
		},
		get draggedOverIndex() {
			return draggedOverIndex;
		},
		handleDragStart,
		handleDragOver,
		handleDragLeave,
		handleDrop,
		handleDragEnd
	};
}

export default createSortableGridState;
