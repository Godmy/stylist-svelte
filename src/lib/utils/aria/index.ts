/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

/**
 * ARIA utilities for interactive components
 */

/**
 * Compute aria-label from multiple sources with priority
 * Priority: explicit ariaLabel > aria-label from restProps > fallback
 *
 * @param ariaLabel - Explicitly provided aria label
 * @param restProps - Rest props that might contain aria-label
 * @param fallback - Fallback value if no label is provided
 * @returns Computed aria-label value
 */
export function computeAriaLabel(
	ariaLabel: string | undefined,
	restProps: Record<string, unknown>,
	fallback = ''
): string {
	const fromRest =
		typeof restProps['aria-label'] === 'string' ? (restProps['aria-label'] as string) : '';
	return ariaLabel || fromRest || fallback;
}

/**
 * Generate aria attributes for interactive components
 *
 * @param options - Options for generating aria attributes
 * @returns Object with aria attributes
 */
export function generateAriaAttributes(options: {
	ariaLabel?: string;
	loading?: boolean;
	disabled?: boolean;
	expanded?: boolean;
	controls?: string;
	describedBy?: string;
}) {
	const attrs: Record<string, string | boolean | undefined> = {};

	if (options.ariaLabel) {
		attrs['aria-label'] = options.ariaLabel;
	}

	if (options.loading !== undefined) {
		attrs['aria-busy'] = options.loading;
		if (options.loading) {
			attrs['aria-live'] = 'polite';
		}
	}

	if (options.disabled) {
		attrs['aria-disabled'] = true;
	}

	if (options.expanded !== undefined) {
		attrs['aria-expanded'] = options.expanded;
	}

	if (options.controls) {
		attrs['aria-controls'] = options.controls;
	}

	if (options.describedBy) {
		attrs['aria-describedby'] = options.describedBy;
	}

	return attrs;
}
