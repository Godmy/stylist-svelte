import type { TOKEN_ORIENTATION } from '$stylist/layout/const/enum/orientation';
import type { SplitLayoutGap } from '$stylist/token/type/alias/split-layout-gap';
import type { StackedLayoutProps } from '$stylist/layout/interface/recipe/stacked-layout';

export function createStackedLayoutState(props: StackedLayoutProps) {
	const direction = $derived<(typeof TOKEN_ORIENTATION)[number]>(props.direction ?? 'vertical');
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

