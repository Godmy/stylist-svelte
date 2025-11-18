/**
 * InputAddon types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type InputAddonPosition = 'left' | 'right';
export type InputAddonVariant = 'solid' | 'ghost';

export interface IInputAddonProps extends HTMLAttributes<HTMLDivElement> {
  position?: InputAddonPosition;
  variant?: InputAddonVariant;
  children?: Snippet;
  class?: string;
}