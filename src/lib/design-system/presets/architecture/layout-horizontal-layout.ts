import { cn } from '$stylist/design-system/utils/classnames';
import type { Alignment, Justification, HorizontalGap } from '$stylist/design-system/tokens';
import {
  HORIZONTAL_ALIGN_ITEMS_CLASSES,
  HORIZONTAL_GAP_CLASSES,
  HORIZONTAL_JUSTIFY_CONTENT_CLASSES
} from '$stylist/design-system/tokens';

export const getHorizontalLayoutClasses = (
  gap: HorizontalGap,
  alignItems: Alignment,
  justifyContent: Justification,
  wrap: boolean,
  className = ''
) => {
  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';
  return cn(
    'flex',
    HORIZONTAL_ALIGN_ITEMS_CLASSES[alignItems],
    HORIZONTAL_JUSTIFY_CONTENT_CLASSES[justifyContent],
    wrapClass,
    HORIZONTAL_GAP_CLASSES[gap],
    className
  );
};
