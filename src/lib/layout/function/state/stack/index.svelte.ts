import { StackStyleManager } from '$stylist/layout/class/style-manager/stack';
import type { StackProps } from '$stylist/layout/type/struct/stack';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';

export function createStackState(props: StackProps) {
	const direction = $derived<TokenOrientation>(
		props.direction === 'row' ? 'horizontal' : props.direction === 'column' ? 'vertical' : 'vertical'
	);
	const spacing = $derived<string | number>(props.spacing ?? '1rem');
	const align = $derived<TokenAlignment>((props.align as TokenAlignment | undefined) ?? 'center');
	const justify = $derived<TokenJustification>((props.justify as TokenJustification | undefined) ?? 'justify');
	const gap = $derived(StackStyleManager.getStackGap(spacing));
	const classes = $derived(StackStyleManager.getStackClasses(direction, align, justify, props.class));

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


