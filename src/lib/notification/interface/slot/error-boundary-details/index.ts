import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

/**
 * @interface SlotErrorBoundaryDetails
 * @description Interface for error details passed to the component
 */
export interface SlotErrorBoundaryDetails {
  error: Error;
  details: {
    reset: () => void;
    componentStack: string;
  };
}
