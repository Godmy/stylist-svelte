/**
 * ExportPanel types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IExportPanelProps {
  class?: string;
  children?: Snippet;
  onexport?: (event: CustomEvent<{ format: 'png' | 'jpeg' | 'svg' | 'pdf'; includeLegend: boolean; includeFilters: boolean }>) => void;
}

export interface IExportPanelStyleClasses {
  base: string;
  header: string;
  section: string;
  title: string;
  options: string;
  option: string;
  checkbox: string;
}