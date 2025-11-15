import { 
  DEFAULT_BLOCKQUOTE_CLASSES, 
  BORDER_BLOCKQUOTE_CLASSES, 
  BACKGROUND_BLOCKQUOTE_CLASSES, 
  DEFAULT_PADDING_CLASSES 
} from './constant';

/**
 * Gets the CSS classes for the blockquote element based on props
 * 
 * @param withBorder - Whether to include border styling
 * @param withBackground - Whether to include background styling
 * @param className - Additional CSS classes
 * @returns Combined CSS classes string
 */
export function getBlockquoteClasses(
  withBorder: boolean, 
  withBackground: boolean, 
  className: string
): string {
  let classes = DEFAULT_BLOCKQUOTE_CLASSES;

  if (withBorder) {
    classes += ` ${BORDER_BLOCKQUOTE_CLASSES}`;
  }

  if (withBackground) {
    classes += ` ${BACKGROUND_BLOCKQUOTE_CLASSES}`;
  } else {
    classes += ` ${DEFAULT_PADDING_CLASSES}`;
  }

  return classes + ` ${className}`.trim();
}