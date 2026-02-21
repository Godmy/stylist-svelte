import type { ErrorMessageProps } from '../props/interaction/error-message';

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