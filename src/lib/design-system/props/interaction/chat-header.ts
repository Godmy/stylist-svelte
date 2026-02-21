/**
 * ChatHeader types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ChatHeaderUser {
  id: string;
  name: string;
  avatar?: string;
  status?: 'online' | 'away' | 'offline' | 'typing';
  lastSeen?: Date;
}

export interface ChatHeaderChat {
  id: string;
  name?: string;
  participants: ChatHeaderUser[];
  isGroup: boolean;
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
  avatar?: string;
}

export type ChatHeaderRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

export type ChatHeaderProps = ChatHeaderRestProps & {
  chat: ChatHeaderChat;
  currentUser: ChatHeaderUser;
  showActions?: boolean;
  class?: string;
  children?: Snippet;
};