export interface IDropZoneProps {
  class?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  maxItems?: number;
  onDrop?: (items: SlotDropItem[]) => void;
  onDragOver?: (event: DragEvent) => void;
  onDragLeave?: (event: DragEvent) => void;
  onItemAdded?: (item: SlotDropItem) => void;
  onItemRemoved?: (item: SlotDropItem) => void;
  preview?: boolean;
  label?: string;
  description?: string;
  children?: any;
}

export interface SlotDropItem {
  id: string;
  name: string;
  type: string;
  size?: number;
  data?: any;
}
