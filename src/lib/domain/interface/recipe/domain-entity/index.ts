export interface RecipeDomainEntity {
	name: string;
	path: string;
	fileCount?: number;
	active?: boolean;
	draggable?: boolean;
	onSelect?: (path: string) => void;
	onAdd?: (path: string) => void;
	onDragStart?: (event: DragEvent) => void;
}
