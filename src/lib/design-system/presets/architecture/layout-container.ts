import type { ContainerMaxWidth } from '$stylist/design-system/attributes';
import { CONTAINER_MAX_WIDTH_CLASSES } from '$stylist/design-system/tokens';
import { cn } from '$stylist/design-system/utils/classnames';

export const getContainerClasses = (maxWidth: ContainerMaxWidth, className = '') => {
  const maxWidthClass = CONTAINER_MAX_WIDTH_CLASSES[maxWidth] || CONTAINER_MAX_WIDTH_CLASSES.full;
  return cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthClass, className);
};
