/**
 * ListWithAvatars types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';

export type ListItem = {
  id: string;
  title: string;
  subtitle?: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  description?: string;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }>;
};

export interface IListWithAvatarsProps extends InteractionHTMLAttributes<HTMLDivElement> {
  items: ListItem[];
  showAvatar?: boolean;
  showStatus?: boolean;
  showSubtitle?: boolean;
  showDescription?: boolean;
  showActions?: boolean;
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  itemClass?: string;
  avatarClass?: string;
  contentClass?: string;
  actionsClass?: string;
  children?: Snippet;
}

export interface IListWithAvatarsStyleClasses {
  base: string;
  item: string;
  avatar: string;
  content: string;
  status: string;
  actions: string;
  title: string;
  subtitle: string;
  description: string;
}


