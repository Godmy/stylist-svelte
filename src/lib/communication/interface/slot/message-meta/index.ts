/**
 * MessageMeta types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface SlotMessageMeta {
  class?: string;
  timestamp?: string;
  sender?: string;
  status?: 'sent' | 'delivered' | 'read';
  children?: Snippet;
}
