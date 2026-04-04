export function createAriaAttributes(options: {
	ariaLabel?: string;
	loading?: boolean;
	disabled?: boolean;
	expanded?: boolean;
	controls?: string;
	describedBy?: string;
}): Record<string, string | boolean | undefined> {
	const attributes: Record<string, string | boolean | undefined> = {};

	if (options.ariaLabel) {
		attributes['aria-label'] = options.ariaLabel;
	}

	if (options.loading !== undefined) {
		attributes['aria-busy'] = options.loading;
		if (options.loading) {
			attributes['aria-live'] = 'polite';
		}
	}

	if (options.disabled) {
		attributes['aria-disabled'] = true;
	}

	if (options.expanded !== undefined) {
		attributes['aria-expanded'] = options.expanded;
	}

	if (options.controls) {
		attributes['aria-controls'] = options.controls;
	}

	if (options.describedBy) {
		attributes['aria-describedby'] = options.describedBy;
	}

	return attributes;
}

export const generateAriaAttributes = createAriaAttributes;
