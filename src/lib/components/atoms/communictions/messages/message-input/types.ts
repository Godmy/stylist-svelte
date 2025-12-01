/**
 * MessageInput types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMessageInputProps {
  class?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  children?: Snippet;
  oninput?: (event: Event) => void;
  onchange?: (event: Event) => void;
}

export interface IMessageInputStyleClasses {
  base: string;
  input: string;
  disabled: string;
}