import type { Snippet } from 'svelte';

// SlotDropItem type
export type SlotDropItem = {
  id: string;
  name: string;
  type: string;
  size?: number;
  data?: any;
};
