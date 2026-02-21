export interface ErrorMessageProps {
  /**
   * Error object or message string
   */
  error: string | Error | null;
  
  /**
   * Title for the error message
   * @default 'Error'
   */
  title?: string;
  
  /**
   * Callback function to retry the failed action
   */
  onRetry?: () => void;
  
  /**
   * Whether to show the retry button
   * @default true
   */
  showRetry?: boolean;
  
  /**
   * Additional CSS classes
   */
  class?: string;
}