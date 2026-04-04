export interface IDropZoneProps {
  class?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  maxItems?: number;
  onDrop?: (items: DropItem[]) => void;
  onDragOver?: (event: DragEvent) => void;
  onDragLeave?: (event: DragEvent) => void;
  onItemAdded?: (item: DropItem) => void;
  onItemRemoved?: (item: DropItem) => void;
  preview?: boolean;
  label?: string;
  description?: string;
  children?: any;
}

export interface DropItem {
  id: string;
  name: string;
  type: string;
  size?: number;
  data?: any;
}
