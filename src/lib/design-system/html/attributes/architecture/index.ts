/**
 * Architecture HTML Attributes
 *
 * Базовый тип для всех архитектурных компонентов (layout, containers, grids, etc.)
 *
 * @package @stylist/design-system
 * @subpackage html/attributes/architecture
 */

import type { ThemeAttributes } from '../theme';

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
