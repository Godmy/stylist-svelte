/**
 * RealTimePresence types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IRealTimePresenceProps {
  class?: string;
  users?: Array<{id: string, name: string, status: 'online' | 'away' | 'offline'}>;
  children?: Snippet;
  onpresencechange?: (event: CustomEvent) => void;
}

export interface IRealTimePresenceStyleClasses {
  base: string;
  user: string;
  status: string;
  online: string;
  away: string;
  offline: string;
}