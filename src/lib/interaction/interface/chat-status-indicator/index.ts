import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAvailability } from '$stylist/interaction/type/token/availability';

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




