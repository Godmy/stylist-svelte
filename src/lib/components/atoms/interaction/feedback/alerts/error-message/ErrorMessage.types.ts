export interface IErrorMessageProps {
  error?: string | Error;
  title?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  class?: string;
  [key: string]: any; // Для остальных свойств
}

export const DEFAULT_ERROR_MESSAGE_SHOW_RETRY = true;

export const getErrorMessageContainerClass = (className = '') => {
  return `flex items-start gap-2 p-3 text-red-600 bg-red-50 rounded-lg border border-red-200 ${className}`.trim();
};

export const getErrorMessageIconClass = () => 'w-5 h-5 mt-0.5 flex-shrink-0';

export const getErrorMessageTextClass = () => 'text-sm font-medium';