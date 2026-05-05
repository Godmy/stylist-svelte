/**
 * MessageMeta types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface SlotMessageMetaStyleClasses {
  base: string;
  timestamp: string;
  sender: string;
  status: string;
}
