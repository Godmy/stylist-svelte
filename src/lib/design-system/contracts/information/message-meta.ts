/**
 * MessageMeta types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMessageMetaProps {
  class?: string;
  timestamp?: string;
  sender?: string;
  status?: 'sent' | 'delivered' | 'read';
  children?: Snippet;
}

export interface IMessageMetaStyleClasses {
  base: string;
  timestamp: string;
  sender: string;
  status: string;
}