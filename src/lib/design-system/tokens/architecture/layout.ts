import type { ComponentSize } from './component-size';

export const HORIZONTAL_GAPS = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type HorizontalGap = (typeof HORIZONTAL_GAPS)[number];

export const LAYOUT_SIZES = ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4', 'full'] as const;
export type LayoutSize = (typeof LAYOUT_SIZES)[number];

export type ContainerMaxWidth = ComponentSize | 'full';
