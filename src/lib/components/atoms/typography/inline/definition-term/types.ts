import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IDefinitionTermProps {
  /**
   * Содержимое термина определения.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type DefinitionTermProps = IDefinitionTermProps & HTMLAttributes<HTMLElement>;
