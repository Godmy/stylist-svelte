import type { StackProps } from '$stylist/layout/type/struct/stack';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';

function resolveGap(spacing: string | number): string {
	if (typeof spacing === 'number') return `${spacing}px`;
	switch (spacing) {
		case 'xs':
			return '0.25rem';
		case 'sm':
			return '0.5rem';
		case 'md':
			return '1rem';
		case 'lg':
			return '1.5rem';
		case 'xl':
			return '2rem';
		default:
			return String(spacing);
	}
}

export function createStackState(props: StackProps) {
	const direction = $derived<TokenOrientation>(
		props.direction === 'row' ? 'horizontal' : 'vertical'
	);
	const spacing = $derived<string | number>(props.spacing ?? '1rem');
	const align = $derived<TokenAlignment>((props.align as TokenAlignment | undefined) ?? 'center');
	const justify = $derived<TokenJustification>(
		(props.justify as TokenJustification | undefined) ?? 'justify'
	);
	const gap = $derived(resolveGap(spacing));

	const restProps = $derived.by(() => {
		const {
			class: _class,
			direction: _direction,
			spacing: _spacing,
			align: _align,
			justify: _justify,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	const classes = $derived(
		['stack', props.class].filter(Boolean).join(' ')
	);

	return {
		get direction() {
			return direction;
		},
		get spacing() {
			return spacing;
		},
		get align() {
			return align;
		},
		get justify() {
			return justify;
		},
		get gap() {
			return gap;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStackState;
