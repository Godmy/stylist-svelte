import type { LayoutGravity } from '$stylist/layout/type/alias/item-layout-gravity';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { GridMoleculeJustify } from '$stylist/layout/type/alias/grid-molecule-justify';
import type { GridMoleculeProps } from '$stylist/layout/type/struct/layout-extended/grid-molecule-props';

export function createGridMoleculeState(props: GridMoleculeProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived<SplitLayoutGap>(props.gap ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived<LayoutGravity>(props.alignItems ?? 'stretch');
	const justifyContent = $derived<GridMoleculeJustify>(props.justifyContent ?? 'start');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			cols: _cols,
			gap: _gap,
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
		get restProps() {
			return restProps;
		}
	};
}

export default createGridMoleculeState;

