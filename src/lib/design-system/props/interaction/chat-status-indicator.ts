export type ChatStatusIndicatorVariant = 'online' | 'offline' | 'away' | 'typing';
export type ChatStatusIndicatorSize = 'sm' | 'md' | 'lg';

export interface ChatStatusIndicatorProps {
  /**
   * The status to display
   * @default 'offline'
   */
  status?: ChatStatusIndicatorVariant;
  
  /**
   * The size of the indicator
   * @default 'sm'
   */
  size?: ChatStatusIndicatorSize;
  
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