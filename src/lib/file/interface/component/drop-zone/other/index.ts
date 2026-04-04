import type { Snippet } from 'svelte';

export type DropItem = {
  id: string;
  name: string;
  type: string;
  size?: number;
  data?: unknown;
};

export interface IDropZoneProps {
  children?: Snippet;
  class?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  maxItems?: number;
  onDrop?: (items: DropItem[]) => void;
  onDragOver?: (e: DragEvent) => void;
  onDragLeave?: (e: DragEvent) => void;
  onItemAdded?: (item: DropItem) => void;
  onItemRemoved?: (item: DropItem) => void;
  preview?: boolean;
  label?: string;
  description?: string;
}
