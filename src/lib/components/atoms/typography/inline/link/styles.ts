import type { LinkVariant, LinkSize } from './types';
import {
  BASE_LINK_CLASSES,
  LINK_VARIANT_CLASSES,
  LINK_SIZE_CLASSES,
  LINK_DISABLED_CLASSES,
  LINK_UNDERLINE_CLASSES,
  LINK_NO_UNDERLINE_CLASSES
} from './constant';

export class LinkStyleManager {
  static getLinkClasses(
    variant: LinkVariant,
    size: LinkSize,
    disabled: boolean,
    underline: boolean,
    className: string | undefined
  ): string {
    const classes = [
      BASE_LINK_CLASSES,
      LINK_VARIANT_CLASSES[variant],
      LINK_SIZE_CLASSES[size],
      disabled ? LINK_DISABLED_CLASSES : '',
      underline ? LINK_UNDERLINE_CLASSES : LINK_NO_UNDERLINE_CLASSES,
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
