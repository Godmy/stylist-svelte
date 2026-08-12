import type { DragDropFileStatus } from '$stylist/file/type/object/drag-drop-file-status';
export interface ContractDragDropFile {
	id: string;
	name: string;
	size: number;
	type: string;
	status: DragDropFileStatus;
	progress?: number;
}
