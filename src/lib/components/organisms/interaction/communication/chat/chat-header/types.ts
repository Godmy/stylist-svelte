/**
 * ChatHeader types and interfaces following SOLID principles
 */

import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
import type { Snippet } from 'svelte';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  status?: 'online' | 'away' | 'offline' | 'typing';
  lastSeen?: Date;
}

export interface Chat {
  id: string;
  name?: string;
  participants: User[];
  isGroup: boolean;
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
  avatar?: string;
}

export interface IChatHeaderProps extends InteractionHTMLAttributes<HTMLDivElement> {
  chat: Chat;
  currentUser: User;
  showActions?: boolean;
  class?: string;
  children?: Snippet;
}

export interface IChatHeaderStyleClasses {
  header: string;
  info: string;
  details: string;
  actions: string;
  name: string;
}


