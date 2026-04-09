import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';
import type { SpacerProps } from '$stylist/layout/type/struct/spacer';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';

export function createSpacerState(props: SpacerProps) {
	const axis = $derived<TokenOrientation | 'both'>(props.axis ?? 'vertical');
	const sizeValue = $derived(LayoutStyleManager.getSpacerSize(props.size));
	const classes = $derived(LayoutStyleManager.getSpacerClasses(axis, props.class));

	const restProps = $derived.by(() => {
		const { class: _class, axis: _axis, size: _size, ...rest } = props;
		return rest;
	});

	return {
		get axis() {
			return axis;
		},
		get sizeValue() {
			return sizeValue;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createSpacerState;


