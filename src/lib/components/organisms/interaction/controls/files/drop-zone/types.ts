/**
 * DropZone types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type DropItem = {
  id: string;
  name: string;
  type: string;
  size?: number;
  data?: any;
};

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

export interface IDropZoneStyleClasses {
  base: string;
  dragOver: string;
  disabled: string;
  item: string;
  list: string;
  button: string;
}