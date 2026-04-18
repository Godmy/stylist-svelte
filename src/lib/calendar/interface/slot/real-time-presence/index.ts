/**
 * RealTimePresence types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface SlotRealTimePresence {
  class?: string;
  users?: Array<{id: string, name: string, status: 'online' | 'away' | 'offline'}>;
  children?: Snippet;
  onpresencechange?: (event: CustomEvent) => void;
}
