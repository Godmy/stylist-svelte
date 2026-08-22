import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';

const BORDER_STYLE_MAP: Record<string, string> = {
	solid: 'solid',
	dashed: 'dashed',
	dotted: 'dotted',
	double: 'double',
	none: 'none',
	invisible: 'none',
	bold: 'solid',
	tapered: 'solid'
};

const BORDER_WIDTH_MAP: Record<string, string> = {
	sm: '1px',
	md: '2px',
	lg: '4px'
};

const BORDER_RADIUS_MAP: Record<string, string> = {
	none: '0',
	sm: '0.25rem',
	md: '0.375rem',
	lg: '0.5rem',
	xl: '0.75rem',
	full: '9999px'
};

export function createBorderState(props: RecipeBorder) {
	const borderStyle = $derived(props.borderStyle ?? 'solid');
	const borderWidth = $derived.by(() => {
		if (borderStyle === 'bold') return '2px';
		const raw = props.borderWidth ?? '1px';
		return BORDER_WIDTH_MAP[raw] ?? raw;
	});
	const borderColor = $derived(props.borderColor || 'var(--color-border-primary)');
	const borderRadius = $derived.by(() => {
		const raw = props.borderRadius || 'none';
		return BORDER_RADIUS_MAP[raw] ?? raw;
	});
	const animated = $derived(props.animated ?? false);

	const inlineStyle = $derived.by(() => {
		const cssBorderStyle = BORDER_STYLE_MAP[borderStyle] ?? 'solid';
		const parts: string[] = [`--border-color: ${borderColor}`, `border-radius: ${borderRadius}`];

		if (borderStyle === 'none' || borderStyle === 'invisible') {
			parts.push('border: none');
		} else if (props.borderTop || props.borderBottom || props.borderLeft || props.borderRight) {
			if (props.borderTop)
				parts.push(`border-top: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
			if (props.borderBottom)
				parts.push(`border-bottom: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
			if (props.borderLeft)
				parts.push(`border-left: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
			if (props.borderRight)
				parts.push(`border-right: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
		} else {
			parts.push(`border: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
		}

		return parts.join('; ');
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			borderStyle: _bs,
			borderWidth: _bw,
			borderColor: _bc,
			borderRadius: _br,
			borderTop: _bt,
			borderBottom: _bb,
			borderLeft: _bl,
			borderRight: _r,
			animated: _a,
			children: _ch,
			...rest
		} = props;
		return rest;
	});

	return {
		get borderStyle() {
			return borderStyle;
		},
		get borderWidth() {
			return borderWidth;
		},
		get borderColor() {
			return borderColor;
		},
		get borderRadius() {
			return borderRadius;
		},
		get animated() {
			return animated;
		},
		get inlineStyle() {
			return inlineStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createBorderState;
