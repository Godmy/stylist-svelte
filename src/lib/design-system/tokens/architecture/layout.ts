export const HORIZONTAL_GAPS = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type HorizontalGap = (typeof HORIZONTAL_GAPS)[number];

export const LAYOUT_SIZES = ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4', 'full'] as const;
export type LayoutSize = (typeof LAYOUT_SIZES)[number];

export const CONTAINER_MAX_WIDTHS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;
export type ContainerMaxWidth = (typeof CONTAINER_MAX_WIDTHS)[number];
