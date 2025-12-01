/**
 * LoginForm types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface ILoginFormProps {
  class?: string;
  children?: Snippet;
  onsubmit?: (event: Event) => void;
  onreset?: (event: Event) => void;
}

export interface ILoginFormStyleClasses {
  base: string;
}