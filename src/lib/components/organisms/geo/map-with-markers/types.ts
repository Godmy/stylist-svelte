/**
 * MapWithMarkers types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMapWithMarkersProps {
  class?: string;
  markers?: Array<{id: string, lat: number, lng: number, title?: string}>;
  center?: {lat: number, lng: number};
  zoom?: number;
  children?: Snippet;
}

export interface IMapWithMarkersStyleClasses {
  base: string;
  map: string;
  marker: string;
}