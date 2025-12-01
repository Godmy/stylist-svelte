/**
 * MessageThread types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMessageThreadProps {
  class?: string;
  messages?: Array<{id: string, content: string, sender: string, timestamp: string, status?: string}>;
  currentUser?: string;
  children?: Snippet;
}

export interface IMessageThreadStyleClasses {
  base: string;
  message: string;
  user: string;
  contact: string;
}