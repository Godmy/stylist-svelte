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