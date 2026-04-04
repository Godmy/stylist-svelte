import type { Snippet } from 'svelte';

// ListItem type
export type ListItem = {
  id: string;
  title: string;
  subtitle?: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  description?: string;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }>;
};
