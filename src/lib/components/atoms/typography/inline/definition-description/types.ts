import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IDefinitionDescriptionProps {
  /**
   * Содержимое описания определения.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type DefinitionDescriptionProps = IDefinitionDescriptionProps & HTMLAttributes<HTMLElement>;
