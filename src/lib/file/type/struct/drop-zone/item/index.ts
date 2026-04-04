import type { Snippet } from 'svelte';

// DropItem type
export type DropItem = {
  id: string;
  name: string;
  type: string;
  size?: number;
  data?: any;
};
