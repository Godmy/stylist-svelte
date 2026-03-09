import type { HTMLAttributes } from 'svelte/elements';
import type { SidebarVariant } from '$stylist/design-system/tokens/architecture/sidebar';

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
  variant?: SidebarVariant;
};

// Presets moved from presets\draggable-card.ts

// Default values for DraggableCard component
export const DEFAULT_DRAGGABLE_CARD_PROPS = {
  disabled: false,
  draggable: true,
  showHandle: true,
  showMenu: true,
  variant: 'default' as SidebarVariant
};

// Preset configurations for common use cases
export const DRAGGABLE_CARD_PRESETS = {
  compact: {
    variant: 'compact' as SidebarVariant,
    showHandle: true,
    showMenu: false
  },
  minimal: {
    variant: 'minimal' as SidebarVariant,
    showHandle: false,
    showMenu: true
  },
  kanban: {
    variant: 'default' as SidebarVariant,
    showHandle: true,
    showMenu: true
  }
};




