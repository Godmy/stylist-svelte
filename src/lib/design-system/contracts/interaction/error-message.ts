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

// Presets moved from presets\error-message.ts

export const errorMessagePresets: Record<string, Partial<ErrorMessageProps>> = {
  default: {
    title: 'Error',
    showRetry: true
  },
  withoutRetry: {
    title: 'Error',
    showRetry: false
  },
  withCustomError: {
    error: 'Something went wrong!',
    title: 'Custom Error',
    showRetry: true
  }
};

