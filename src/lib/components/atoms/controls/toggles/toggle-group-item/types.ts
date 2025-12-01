/**
 * ToggleGroupItem types and interfaces following SOLID principles
 */

import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IToggleGroupItemProps extends HTMLButtonAttributes {
  value: string;
  disabled?: boolean;
  class?: string;
  children?: Snippet;
}

export interface IToggleGroupItemStyleClasses {
  active: string;
  disabled: string;
  inactive: string;
}

export interface IToggleGroupContext {
  updateValue: (val: string) => void;
  value: string | string[] | null | undefined;
  disabled: boolean;
}