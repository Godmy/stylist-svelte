import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * @interface IErrorBoundaryProps
 * @description Interface for ErrorBoundary component props following SOLID principles
 * Separates the concerns of the component by defining all external contracts
 */
export interface IErrorBoundaryProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /**
   * The content to be wrapped by the error boundary
   */
  children: Snippet<[]>;
  
  /**
   * Custom fallback UI to render when an error occurs
   * Takes error and reset function as parameters
   */
  fallback?: Snippet<[error: unknown, reset: () => void]>;
  
  /**
   * Additional CSS classes for the host element
   */
  class?: string;
  
  /**
   * Additional CSS classes for the content container
   */
  contentClass?: string;
  
  /**
   * Additional CSS classes for the header section
   */
  headerClass?: string;
  
  /**
   * Additional CSS classes for the body section
   */
  bodyClass?: string;
  
  /**
   * Additional CSS classes for the footer section
   */
  footerClass?: string;
  
  /**
   * Title text for the error boundary
   * @default 'Something went wrong'
   */
  title?: string;
  
  /**
   * Message text for the error boundary
   * @default 'An error occurred. Please try again.'
   */
  message?: string;
  
  /**
   * Whether to show detailed error information
   * @default false
   */
  showDetails?: boolean;
  
  /**
   * Callback function called when reset is triggered
   */
  onReset?: () => void;
}

/**
 * @interface IErrorBoundaryDetails
 * @description Interface for error details passed to the component
 */
export interface IErrorBoundaryDetails {
  error: Error;
  details: {
    reset: () => void;
    componentStack: string;
  };
}