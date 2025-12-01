/**
 * ResourceOptimizer types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IResourceOptimizerProps {
  class?: string;
  resources?: Array<{id: string, name: string, usage: number, limit: number}>;
  children?: Snippet;
  onoptimization?: (event: CustomEvent) => void;
}

export interface IResourceOptimizerStyleClasses {
  base: string;
  resource: string;
  usage: string;
  optimized: string;
}