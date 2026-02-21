import type { DraggableCardVariant } from '../props/information/draggable-card';

// Default values for DraggableCard component
export const DEFAULT_DRAGGABLE_CARD_PROPS = {
  disabled: false,
  draggable: true,
  showHandle: true,
  showMenu: true,
  variant: 'default' as DraggableCardVariant
};

// Preset configurations for common use cases
export const DRAGGABLE_CARD_PRESETS = {
  compact: {
    variant: 'compact' as DraggableCardVariant,
    showHandle: true,
    showMenu: false
  },
  minimal: {
    variant: 'minimal' as DraggableCardVariant,
    showHandle: false,
    showMenu: true
  },
  kanban: {
    variant: 'default' as DraggableCardVariant,
    showHandle: true,
    showMenu: true
  }
};