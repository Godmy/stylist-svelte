import type { GestureContract } from '$stylist/layout/type/object/gesture-contract';

export type DragContract = GestureContract & {
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
};
