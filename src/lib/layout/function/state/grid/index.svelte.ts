import { GridStyleManager } from '$stylist/layout/class/style-manager/grid';
import type { GridContract } from '$stylist/layout/type/struct/grid';

export function createGridState(props: GridContract) {
	const zoom = $derived(props.zoom ?? 1);
	const gridSize = $derived(props.gridSize ?? 100);
	const color = $derived(props.color ?? 'var(--color-border-subtle, #e0e0e0)');
	const opacity = $derived(props.visible ? Math.max(0.1, Math.min(1, zoom * 0.5)) : 0);
	const classes = $derived(GridStyleManager.getGridClass(typeof props.class === 'string' ? props.class : ''));
	const style = $derived(GridStyleManager.getGridStyle(color, opacity));
	const restProps = $derived.by(() => {
		const {
			class: _class,
			zoom: _zoom,
			gridSize: _gridSize,
			color: _color,
			visible: _visible,
			...rest
		} = props;
		return rest;
	});

	return {
		get zoom() {
			return zoom;
		},
		get gridSize() {
			return gridSize;
		},
		get color() {
			return color;
		},
		get opacity() {
			return opacity;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createGridState;
