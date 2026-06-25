import type { CenteredLayoutAxis } from '$stylist/token/type/alias/centered-layout-axis';
import type { CenteredLayoutProps } from '$stylist/layout/type/struct/layout-extended/centered-layout-props';

export function createCenteredLayoutState(props: CenteredLayoutProps) {
	const axis = $derived<CenteredLayoutAxis>(props.axis ?? 'both');
	const fillHeight = $derived(props.fillHeight ?? false);
	const fillWidth = $derived(props.fillWidth ?? true);
	const maxWidth = $derived(props.maxWidth);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			axis: _axis,
			fillHeight: _fillHeight,
			fillWidth: _fillWidth,
			maxWidth: _maxWidth,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get axis() {
			return axis;
		},
		get fillHeight() {
			return fillHeight;
		},
		get fillWidth() {
			return fillWidth;
		},
		get maxWidth() {
			return maxWidth;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createCenteredLayoutState;

