import { StackedLayoutStyleManager } from '$stylist/layout/class/style-manager/stacked-layout';
import type { StackedLayoutDirection } from '$stylist/layout/type/enum/stacked-layout-direction';
import type { StackedLayoutGap } from '$stylist/layout/type/enum/stacked-layout-gap';
import type { StackedLayoutProps } from '$stylist/layout/interface/recipe/stacked-layout';


export function createStackedLayoutState(props: StackedLayoutProps) {
	const direction = $derived<StackedLayoutDirection>(props.direction ?? 'vertical');
	const gap = $derived<StackedLayoutGap>(props.gap ?? 'md');
	const alignItems = $derived<'start' | 'center' | 'end' | 'stretch'>(props.alignItems ?? 'stretch');
	const justifyContent = $derived<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>(
		props.justifyContent ?? 'start'
	);
	const classes = $derived(
		StackedLayoutStyleManager.getHostClass(direction, gap, alignItems, justifyContent, props.class)
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
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStackedLayoutState;
