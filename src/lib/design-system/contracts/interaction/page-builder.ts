import type { HTMLAttributes } from 'svelte/elements';

export type PageBuilderElementType =
  | 'text'
  | 'image'
  | 'video'
  | 'button'
  | 'divider'
  | 'heading'
  | 'container'
  | 'grid';

export interface PageBuilderTextAttributes {
  fontSize?: string;
  color?: string;
}

export interface PageBuilderHeadingAttributes extends PageBuilderTextAttributes {
  level?: number;
}

export interface PageBuilderButtonAttributes {
  backgroundColor?: string;
  color?: string;
  padding?: string;
}

export interface PageBuilderImageAttributes {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}

export type PageBuilderElementAttributes =
  | PageBuilderTextAttributes
  | PageBuilderHeadingAttributes
  | PageBuilderButtonAttributes
  | PageBuilderImageAttributes
  | Record<string, unknown>;

export interface PageBuilderElement {
  id: string;
  type: PageBuilderElementType;
  content?: string;
  attributes?: PageBuilderElementAttributes;
  children?: PageBuilderElement[];
}

export interface PageBuilderToolbarItem {
  type: PageBuilderElementType;
  label: string;
  icon: unknown;
}

export interface PageBuilderProps extends HTMLAttributes<HTMLDivElement> {
  initialElements?: PageBuilderElement[];
  onSave?: (elements: PageBuilderElement[]) => void;
  showToolbar?: boolean;
  showPreview?: boolean;
  editable?: boolean;
  class?: string;
  toolbarClass?: string;
  canvasClass?: string;
  elementClass?: string;
}
