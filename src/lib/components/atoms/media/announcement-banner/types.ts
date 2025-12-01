import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue } from './styles';

export interface IAnnouncementBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  title?: string;
  description?: string;
  icon?: string;
  class?: ClassValue;
  children?: Snippet;
}