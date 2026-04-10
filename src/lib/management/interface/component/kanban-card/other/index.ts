import type { Snippet } from 'svelte';
import type { KanbanCardType, KanbanCardUser } from '$stylist/management/function/state/kanban-card';

export interface KanbanCardProps {
  card: KanbanCardType;
  draggable?: boolean;
  selected?: boolean;
  editable?: boolean;
  archivable?: boolean;
  deletable?: boolean;
  ondragstart?: (event: DragEvent) => void;
  ondragend?: (event: DragEvent) => void;
  onTitleChange?: (title: string) => void;
  onArchive?: () => void;
  onDelete?: () => void;
  children?: Snippet;
}
