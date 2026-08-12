import type { GestureContract } from '$stylist/layout/interface/slot/gesture-contract';

export interface DragContract extends GestureContract {
	draggable: boolean;
	dropzone: boolean;
	dragData?: any;
	onDragStart?: (event: DragEvent) => void;
	onDrag?: (event: DragEvent) => void;
	onDragEnd?: (event: DragEvent) => void;
	onDragEnter?: (event: DragEvent) => void;
	onDragLeave?: (event: DragEvent) => void;
	onDragOver?: (event: DragEvent) => void;
	onDrop?: (event: DragEvent) => void;
}
