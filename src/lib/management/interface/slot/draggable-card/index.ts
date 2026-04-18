export interface SlotDraggableCard extends Record<string, unknown> {
	data: Record<string, unknown>;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	onDragStart?: (data: Record<string, unknown>) => void;
	onDragEnd?: (data: Record<string, unknown>) => void;
	onCardClick?: (data: Record<string, unknown>) => void;
	onContextMenu?: (data: Record<string, unknown>, event: MouseEvent) => void;
	disabled?: boolean;
	draggable?: boolean;
	showHandle?: boolean;
	showMenu?: boolean;
	variant?: 'default' | 'minimal' | 'compact';
}
