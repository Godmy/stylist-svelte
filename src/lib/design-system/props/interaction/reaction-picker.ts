/**
 * ReactionPicker types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IReactionPickerProps {
  class?: string;
  reactions?: Array<{id: string, emoji: string, label: string}>;
  selected?: string[];
  children?: Snippet;
  onreactionselect?: (event: CustomEvent) => void;
}

export interface IReactionPickerStyleClasses {
  base: string;
  reaction: string;
  selected: string;
}