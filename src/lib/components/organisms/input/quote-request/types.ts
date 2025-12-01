/**
 * QuoteRequest types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IQuoteRequestProps {
  class?: string;
  products?: Array<{id: string, name: string, price: number}>;
  customerInfo?: {name: string, email: string, company?: string};
  children?: Snippet;
  onsubmit?: (event: Event) => void;
}

export interface IQuoteRequestStyleClasses {
  base: string;
  form: string;
  item: string;
}