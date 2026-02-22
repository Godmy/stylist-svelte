import type { HTMLAttributes } from 'svelte/elements';

export interface ZoomControlsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Initial zoom level percentage
   * @default 100
   */
  initialValue?: number;
  
  /**
   * Minimum zoom level percentage
   * @default 50
   */
  minZoom?: number;
  
  /**
   * Maximum zoom level percentage
   * @default 200
   */
  maxZoom?: number;
  
  /**
   * Zoom step increment/decrement
   * @default 10
   */
  step?: number;
  
  /**
   * Whether to show percentage indicator
   * @default true
   */
  showPercentage?: boolean;
  
  /**
   * Additional CSS classes for the container
   */
  class?: string;
  
  /**
   * Additional CSS classes for the controls
   */
  controlsClass?: string;
  
  /**
   * Additional CSS classes for the indicator
   */
  indicatorClass?: string;
  
  /**
   * Canonical callback fired when zoom receives value input
   */
  onValueInput?: (zoomLevel: number) => void;
  
  /**
   * Canonical callback fired when zoom value is changed
   */
  onValueChange?: (zoomLevel: number) => void;
  
  /**
   * @deprecated use onValueChange
   */
  onChange?: (zoomLevel: number) => void;
}

// Presets moved from presets\zoom-controls.ts

export const zoomControlsPresets: Record<string, Partial<ZoomControlsProps>> = {
  default: {
    initialValue: 100,
    minZoom: 50,
    maxZoom: 200,
    step: 10,
    showPercentage: true
  },
  smallStep: {
    initialValue: 100,
    minZoom: 50,
    maxZoom: 200,
    step: 5,
    showPercentage: true
  },
  wideRange: {
    initialValue: 100,
    minZoom: 25,
    maxZoom: 400,
    step: 25,
    showPercentage: true
  }
};

