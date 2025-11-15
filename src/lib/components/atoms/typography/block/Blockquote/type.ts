import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

export interface BlockquoteProps extends RestProps {
  children: Snippet;
  cite?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  className?: string;
}