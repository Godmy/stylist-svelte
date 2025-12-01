/**
 * ToggleGroupRoot types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ToggleGroupType = 'single' | 'multiple';

export interface IToggleGroupRootProps extends HTMLAttributes<HTMLDivElement> {
  value?: string | string[] | null;
  type?: ToggleGroupType;
  disabled?: boolean;
  class?: string;
  children?: Snippet;
  onvalueChange?: (event: CustomEvent<{ value: string | string[] | null }>) => void;
}

export interface IToggleGroupRootStyleClasses {
  type: string;
  disabled: string;
}