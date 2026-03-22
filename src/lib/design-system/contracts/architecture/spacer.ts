import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/ownership/orientation';

/**
 * Spacer Props
 * Used for adding spacing between elements
 */
export interface SpacerProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
  /** Size of the spacer */
  size?: TokenSize;
  /** Axis of the spacer */
  axis?: TokenOrientation;
}




