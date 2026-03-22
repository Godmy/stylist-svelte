import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenAvailability } from '$stylist/design-system/tokens/interaction/availability';

export interface ChatStatusIndicatorProps {
  /**
   * The status to display
   * @default 'offline'
   */
  status?: TokenAvailability;
  
  /**
   * The size of the indicator
   * @default 'sm'
   */
  size?: TokenSize;
  
  /**
   * Whether to show the status label
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * Additional CSS classes
   */
  class?: string;
}




