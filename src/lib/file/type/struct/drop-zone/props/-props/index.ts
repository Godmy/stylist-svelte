import type { Snippet } from 'svelte';
import type { DropItem } from '../../item';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
  children?: Snippet;
  class?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  maxItems?: number;
  onDrop?: (items: DropItem[]) => void;
  onDragOver?: (items: DragEvent) => void;
  onDragLeave?: (items: DragEvent) => void;
  onItemAdded?: (item: DropItem) => void;
  onItemRemoved?: (item: DropItem) => void;
  preview?: boolean;
  label?: string;
  description?: string;
};
