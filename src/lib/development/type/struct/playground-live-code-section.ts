import type { Snippet } from 'svelte';

export interface Props {
  badgeText?: string;
  title?: string;
  description?: string;
  code?: string;
  ctaText?: string;
  ctaHref?: string;
  class?: string;
  children?: Snippet;
}
