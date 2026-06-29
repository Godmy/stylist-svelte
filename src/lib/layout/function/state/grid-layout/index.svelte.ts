import type { GridLayoutProps } from '$stylist/layout/type/struct/layout/grid-layout-props';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { TokenJustification } from '$stylist/layout/type/alias/justification';
import type { TokenSize } from '$stylist/layout/type/alias/size';

const GAP_VALUES: Record<string, string> = {
	xs: '0.25rem',
	sm: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	xl: '2rem',
	'2xl': '3rem'
};

export function createGridLayoutState(props: GridLayoutProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived<TokenSize>((props.gap as TokenSize) ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived<TokenAlignment>(
		(props.alignItems as TokenAlignment | undefined) ?? 'center'
	);
	const justifyContent = $derived<TokenJustification>(
		(props.justifyContent as TokenJustification | undefined) ?? 'justify'
	);

	const items = $derived(props.items ?? []);
	const layoutStyle = $derived(
		`grid-template-columns: ${String(props.columns ?? 'repeat(auto-fit, minmax(250px, 1fr))')}; gap: ${GAP_VALUES[gap] ?? '1rem'};`
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
