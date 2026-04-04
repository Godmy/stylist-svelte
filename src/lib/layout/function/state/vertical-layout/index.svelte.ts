import { VerticalLayoutStyleManager } from '$stylist/layout/class/style-manager/vertical-layout';
import type { VerticalLayoutProps } from '$stylist/layout/type/struct/layout-extended/layout-extended-props';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createVerticalLayoutState(props: VerticalLayoutProps) {
	const gap = $derived<TokenSize>((props.gap as TokenSize | undefined) ?? 'md');
	const alignItems = $derived<TokenAlignment | 'stretch' | 'baseline'>(
		(props.alignItems as TokenAlignment | 'stretch' | 'baseline' | undefined) ?? 'stretch'
	);
	const justifyContent = $derived<TokenJustification>(
		(props.justifyContent as TokenJustification | undefined) ?? 'justify'
	);
	const fillHeight = $derived(props.fillHeight ?? false);
	const classes = $derived(
		VerticalLayoutStyleManager.getHostClass(gap, alignItems, justifyContent, fillHeight, props.class)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			gap: _gap,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			fillHeight: _fillHeight,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get gap() {
			return gap;
		},
		get alignItems() {
			return alignItems;
		},
		get justifyContent() {
			return justifyContent;
		},
		get fillHeight() {
			return fillHeight;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createVerticalLayoutState;


