import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { PresenceStatus } from '$stylist/design-system/tokens/interaction/statuses';

export interface ChatStatusIndicatorProps {
  /**
   * The status to display
   * @default 'offline'
   */
  status?: PresenceStatus;
  
  /**
   * The size of the indicator
   * @default 'sm'
   */
  size?: ComponentSize;
  
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



