import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';

export interface AccessibilityToolbarRecipe extends StructIntersectAll<[]> {
  showFontSizeControls?: boolean;
  showScreenReaderTester?: boolean;
  showFocusIndicatorToggle?: boolean;
  showAnimationToggle?: boolean;
  class?: string;
  toolbarClass?: string;
  buttonClass?: string;
  variant?: 'default' | 'minimal' | 'compact';
  size?: 'sm' | 'md' | 'lg';
  children?: Snippet;
}
