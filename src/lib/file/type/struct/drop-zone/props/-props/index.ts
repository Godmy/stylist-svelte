import type { Snippet } from 'svelte';
import type { SlotDropItem } from '../../item';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
  children?: Snippet;
  class?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  maxItems?: number;
  onDrop?: (items: SlotDropItem[]) => void;
  onDragOver?: (items: DragEvent) => void;
  onDragLeave?: (items: DragEvent) => void;
  onItemAdded?: (item: SlotDropItem) => void;
  onItemRemoved?: (item: SlotDropItem) => void;
  preview?: boolean;
  label?: string;
  description?: string;
};
