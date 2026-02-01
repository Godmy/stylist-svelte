import { BASE_CLASSES, STATE_CLASSES, TRANSITION_CLASSES } from '$stylist/design-system/tokens/classes';

export interface ProductSortOption {
  value: string;
  label: string;
}

export interface ProductSortProps {
  options: ProductSortOption[];
  selectedOption?: string;
  onSortChange?: (option: string) => void;
  class?: string;
}

export const DEFAULT_PRODUCT_SORT_SELECTED = '';

export const getProductSortContainerClasses = (className = '') => {
  return `flex items-center ${className}`.trim();
};

export const getProductSortLabelClasses = () => 'mr-2 text-gray-700';

export const getProductSortSelectClasses = () =>
  `${BASE_CLASSES.input} ${TRANSITION_CLASSES.colors} focus:outline-none focus:ring-2 focus:ring-blue-500`;
