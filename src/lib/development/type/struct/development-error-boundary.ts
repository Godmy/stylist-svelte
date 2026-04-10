import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export type ErrorInfo = {
  error: Error;
  errorInfo: { componentStack: string };
};

export type Props = {
  fallback?: (errorInfo: ErrorInfo) => HTMLElement;
  onError?: (error: Error, errorInfo: { componentStack: string }) => void;
  showDetails?: boolean;
  showReload?: boolean;
  showCopyError?: boolean;
  showReportIssue?: boolean;
  reportUrl?: string;
  title?: string;
  message?: string;
  class?: string;
  fallbackClass?: string;
  headerClass?: string;
  detailsClass?: string;
  actionsClass?: string;
  children?: Snippet;
} & InteractionHTMLAttributes<HTMLDivElement>;
