export type MessageTimestampFormatStyle = 'datetime' | 'time' | 'date';

export interface MessageTimestampProps {
  /**
   * The timestamp to display
   */
  timestamp: Date;
  
  /**
   * The format style for displaying the timestamp
   * @default 'datetime'
   */
  formatStyle?: MessageTimestampFormatStyle;
  
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