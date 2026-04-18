import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';
import type { HorizontalLayoutProps } from '$stylist/layout/type/struct/layout-extended';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';

export function createHorizontalLayoutState(props: HorizontalLayoutProps) {
	const gap = $derived((props.gap ?? 16) as Parameters<typeof LayoutStyleManager.getHorizontalLayoutClasses>[0]);
	const alignItems = $derived<TokenAlignment>((props.alignItems as TokenAlignment | undefined) ?? 'center');
	const justifyContent = $derived<TokenJustification>(
		(props.justifyContent as TokenJustification | undefined) ?? 'justify'
	);
	const wrap = $derived(props.wrap ?? true);
	const classes = $derived(
		LayoutStyleManager.getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, props.class)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			gap: _gap,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			wrap: _wrap,
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
		get wrap() {
			return wrap;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createHorizontalLayoutState;


