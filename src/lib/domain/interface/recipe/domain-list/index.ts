import type { SlotDomainEntity } from '$stylist/domain/interface/slot/domain-entity';

export interface RecipeDomainList {
	entities?: SlotDomainEntity[];
	activePath?: string;
	draggable?: boolean;
	onSelect?: (path: string) => void;
	onAdd?: (path: string) => void;
	onDragStart?: (entity: SlotDomainEntity, event: DragEvent) => void;
	class?: string;
}
