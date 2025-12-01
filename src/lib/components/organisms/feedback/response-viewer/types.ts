/**
 * ResponseViewer types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IResponseViewerProps {
  class?: string;
  response?: string | object;
  format?: 'json' | 'xml' | 'text' | 'html';
  children?: Snippet;
}

export interface IResponseViewerStyleClasses {
  base: string;
  content: string;
  json: string;
  xml: string;
  text: string;
}