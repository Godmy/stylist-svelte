import { GridMoleculeStyleManager } from '$stylist/layout/class/style-manager/grid-molecule';
import type { GridMoleculeAlign, GridMoleculeGap, GridMoleculeJustify } from '$stylist/layout/class/style-manager/grid-molecule';
import type { GridMoleculeProps } from '$stylist/layout/type/struct/layout-extended/grid-molecule-props';

export type { GridMoleculeProps } from '$stylist/layout/type/struct/layout-extended/grid-molecule-props';

export function createGridMoleculeState(props: GridMoleculeProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived<GridMoleculeGap>(props.gap ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived<GridMoleculeAlign>(props.alignItems ?? 'stretch');
	const justifyContent = $derived<GridMoleculeJustify>(props.justifyContent ?? 'start');
	const classes = $derived(
		GridMoleculeStyleManager.getHostClass(cols, gap, alignItems, justifyContent, responsive, props.class)
	);

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
		get cols() { return cols; },
		get gap() { return gap; },
		get responsive() { return responsive; },
		get alignItems() { return alignItems; },
		get justifyContent() { return justifyContent; },
		get classes() { return classes; },
		get restProps() { return restProps; }
	};
}

export default createGridMoleculeState;
