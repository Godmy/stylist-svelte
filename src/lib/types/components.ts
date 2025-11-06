/**
 * Common component types for stylist-svelte library
 */

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Orientation = 'horizontal' | 'vertical';

export interface BaseComponentProps {
	class?: string;
	'data-testid'?: string;
}

// Types for canvas components
export interface DrawingOptions {
  color: string;
  lineWidth: number;
  tool: string;
}

export type DrawingTool = 'pen' | 'eraser' | 'select' | 'text' | 'shape';

// Types for chat components
export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url?: string;
  previewUrl?: string;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  status?: 'online' | 'away' | 'offline';
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

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
  isSystemMessage?: boolean;
}
