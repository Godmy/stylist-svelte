import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';
import type { GridLayoutProps } from '$stylist/layout/type/struct/layout';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createGridLayoutState(props: GridLayoutProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived<TokenSize>((props.gap as TokenSize) ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived<TokenAlignment>((props.alignItems as TokenAlignment | undefined) ?? 'center');
	const justifyContent = $derived<TokenJustification>(
		(props.justifyContent as TokenJustification | undefined) ?? 'justify'
	);
	const containerClass = $derived(LayoutStyleManager.getGridLayoutContainerClass(props.class));

	const items = $derived(props.items ?? []);
	const layoutStyle = $derived(
		LayoutStyleManager.getGridLayoutStyle(
			String(props.columns ?? 'repeat(auto-fit, minmax(250px, 1fr))'),
			LayoutStyleManager.getSpacerSize(gap)
		)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			items: _items,
			columns: _columns,
			gap: _gap,
			itemClass: _itemClass,
			cols: _cols,
			responsive: _responsive,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get cols() {
			return cols;
		},
		get gap() {
			return gap;
		},
		get responsive() {
			return responsive;
		},
		get alignItems() {
			return alignItems;
		},
		get justifyContent() {
			return justifyContent;
		},
		get containerClass() {
			return containerClass;
		},
		get items() {
			return items;
		},
		get layoutStyle() {
			return layoutStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createGridLayoutState;


