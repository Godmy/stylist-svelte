import type { Snippet } from 'svelte';
import type { DropItem } from '$stylist/file/type/struct/drop-zone/item';

// DropZone props interface
export interface IDropZoneProps {
  children?: Snippet;
  class?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number; // in bytes
  maxItems?: number;
  onDrop?: (items: DropItem[]) => void;
  onDragOver?: (items: DragEvent) => void;
  onDragLeave?: (items: DragEvent) => void;
  onItemAdded?: (item: DropItem) => void;
  onItemRemoved?: (item: DropItem) => void;
  preview?: boolean;
  label?: string;
  description?: string;
}
