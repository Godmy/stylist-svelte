import type { ThemeAttributes } from '$stylist/information/interface/theme';

export type LayoutLevel = 'page' | 'section' | 'panel' | 'surface' | 'overlay';
export type LayoutShape = 'rectangular' | 'rounded' | 'pill' | 'circular';
export type LayoutGravity = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export type ArchitectureHTMLAttributes<T extends HTMLElement = HTMLDivElement> =
  ThemeAttributes<T> & {
    layoutLevel?: LayoutLevel;
    layoutShape?: LayoutShape;
    layoutGravity?: LayoutGravity;
    layoutMargin?: string;
    layoutPadding?: string;
    layoutElevation?: number;
    layoutGutter?: string;
    layoutAnchor?: string;
  };
