/**
 * MapSelector types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMapSelectorProps {
  class?: string;
  children?: Snippet;
  onselectionchange?: (event: CustomEvent) => void;
}

export interface IMapSelectorStyleClasses {
  base: string;
}