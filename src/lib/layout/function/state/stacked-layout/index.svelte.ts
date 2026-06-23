import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { StackedLayoutProps } from '$stylist/layout/interface/recipe/stacked-layout';

export function createStackedLayoutState(props: StackedLayoutProps) {
	const direction = $derived<SplitLayoutDirection>(props.direction ?? 'vertical');
	const gap = $derived<SplitLayoutGap>(props.gap ?? 'md');
	const alignItems = $derived<'start' | 'center' | 'end' | 'stretch'>(
		props.alignItems ?? 'stretch'
	);
	const justifyContent = $derived<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>(
		props.justifyContent ?? 'start'
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			direction: _direction,
			gap: _gap,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get direction() {
			return direction;
		},
		get gap() {
			return gap;
		},
		get alignItems() {
			return alignItems;
		},
		get justifyContent() {
			return justifyContent;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStackedLayoutState;
