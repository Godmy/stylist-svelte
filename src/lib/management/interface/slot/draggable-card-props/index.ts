import type { CardData } from '$stylist/management/interface/slot/draggable-card-data';

export interface DraggableCardProps {
	data: CardData;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	disabled?: boolean;
	draggable?: boolean;
	showHandle?: boolean;
	showMenu?: boolean;
	variant?: 'default' | 'minimal' | 'compact';
}
