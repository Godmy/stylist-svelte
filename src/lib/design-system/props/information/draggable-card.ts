import type { HTMLAttributes } from 'svelte/elements';

export type CardData = {
  id: string;
  title: string;
  description?: string;
  content?: any;
  status?: string;
  tags?: string[];
  dueDate?: Date;
  assignedTo?: string;
};

export type DraggableCardRestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

export type DraggableCardVariant = 'default' | 'minimal' | 'compact';

export type DraggableCardProps = DraggableCardRestProps & {
  data: CardData;
  class?: string;
  contentClass?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  onDragStart?: (data: CardData) => void;
  onDragEnd?: (data: CardData) => void;
  onCardClick?: (data: CardData) => void;
  onContextMenu?: (data: CardData, event: MouseEvent) => void;
  disabled?: boolean;
  draggable?: boolean;
  showHandle?: boolean;
  showMenu?: boolean;
  variant?: DraggableCardVariant;
};