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
