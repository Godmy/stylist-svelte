import type { CardData } from '$stylist/management/interface/slot/draggable-card-data';

export interface SlotDraggableCard extends Record<string, unknown> {
	data: CardData;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	onDragStart?: (data: CardData) => void;
	onDragEnd?: (data: CardData) => void;
	onCardClick?: (data: CardData) => void;
	onContextMenu?: (data: CardData, event: MouseEvent) => void;
	disabled?: boolean;
	draggable?: boolean;
	showHandle?: boolean;
	showMenu?: boolean;
	variant?: 'default' | 'minimal' | 'compact';
}
