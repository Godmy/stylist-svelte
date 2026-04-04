import type { TokenTimeFormat } from '$stylist/information/type/enum/time-format';

export interface MessageTimestampProps {
  /**
   * The timestamp to display
   */
  timestamp: Date;
  
  /**
   * The format style for displaying the timestamp
   * @default 'datetime'
   */
  formatStyle?: TokenTimeFormat;
  
  /**
   * Whether to show relative time (e.g., "2 min ago")
   * @default false
   */
  showRelative?: boolean;
  
  /**
   * Additional CSS classes
   */
  class?: string;
}




