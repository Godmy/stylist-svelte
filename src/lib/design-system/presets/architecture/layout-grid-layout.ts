import { BASE_CLASSES } from '$stylist/design-system/tokens';
import type { GridItem, GridItemContent } from '$stylist/design-system/attributes';

export const getGridLayoutContainerClass = (className = '') => {
  return `grid ${className}`.trim();
};

export const getGridLayoutItemClass = (className = '', itemClass = '') => {
  return `${BASE_CLASSES.card} p-4 ${className} ${itemClass}`.trim();
};

export const getGridLayoutStyle = (columns: string, gap: string) => {
  return `grid-template-columns: ${columns}; gap: ${gap};`;
};

export const getGridLayoutContainerClasses = getGridLayoutContainerClass;
export const getGridLayoutItemClasses = getGridLayoutItemClass;

export type { GridItem, GridItemContent };
