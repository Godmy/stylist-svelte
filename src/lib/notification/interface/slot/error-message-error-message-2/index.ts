/**
 * ErrorMessage props interface
 */
export interface SlotErrorMessage {
  error?: string | Error;
  title?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  class?: string;
  [key: string]: any; // Для остальных свойств
}
