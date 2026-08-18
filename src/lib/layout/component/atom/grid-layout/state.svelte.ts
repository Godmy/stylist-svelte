import type { RecipeGridLayout } from '$stylist/layout/interface/recipe/grid-layout';

const GAP_VALUES: Record<string, string> = {
	xs: '0.25rem',
	sm: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	xl: '2rem',
	'2xl': '3rem'
};

function resolveColumns(
	columns: RecipeGridLayout['columns'],
	cols: number,
	responsive: boolean
): string {
	if (typeof columns === 'number') return `repeat(${columns}, 1fr)`;
	if (typeof columns === 'string' && columns.trim()) return columns;
	if (responsive) return 'repeat(auto-fit, minmax(250px, 1fr))';
	return `repeat(${cols}, 1fr)`;
}

export function createGridLayoutState(props: RecipeGridLayout) {
	const cols = $derived(props.cols ?? 2);
	const rows = $derived(props.rows);
	const gap = $derived(props.gap ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived(props.alignItems ?? 'center');
	const justifyContent = $derived(props.justifyContent ?? 'stretch');

	const items = $derived(props.items ?? []);
	const layoutStyle = $derived.by(() => {
		const parts = [
			`grid-template-columns: ${resolveColumns(props.columns, cols, responsive)}`,
			`gap: ${GAP_VALUES[gap] ?? gap}`,
			`align-items: ${alignItems}`,
			`justify-content: ${justifyContent}`
		];
		if (rows) parts.push(`grid-template-rows: repeat(${rows}, 1fr)`);
		return parts.join('; ') + ';';
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			items: _items,
			columns: _columns,
			rows: _rows,
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
