/**
 * Stylist Playground Types
 * Modern playground for Svelte 5 components
 */

export type ControlType =
  | 'text'
  | 'number'
  | 'boolean'
  | 'select'
  | 'color'
  | 'range'
  | 'date'
  | 'object'
  | 'array';

export interface StoryMeta {
  title: string;
  component?: any;
  description?: string;
  tags?: string[];
}

export interface VariantConfig {
  name: string;
  props?: Record<string, any>;
  description?: string;
}

export interface ControlConfig {
  name: string;
  type: ControlType;
  defaultValue?: any;
  description?: string;
  options?: any[];
  min?: number;
  max?: number;
  step?: number;
}

export interface StoryConfig {
  id: string;
  title: string;
  component: any;
  description?: string;
  controls?: ControlConfig[];
  variants?: VariantConfig[];
  code?: string;
  category?: string;
  tags?: string[];
  docs?: string; // Markdown documentation
}

export interface PlaygroundState {
  currentStoryId: string | null;
  darkMode: boolean;
  sidebarOpen: boolean;
  viewport: 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
  showCode: boolean;
  controlsOpen: boolean;
}

export interface NavigatorItem {
  id: string;
  title: string;
  category?: string;
  children?: NavigatorItem[];
}
