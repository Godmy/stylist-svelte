export const ICON_WRAPPER_SHAPES = ['circle', 'square', 'pill', 'rounded'] as const;
export type IconWrapperShape = (typeof ICON_WRAPPER_SHAPES)[number];
