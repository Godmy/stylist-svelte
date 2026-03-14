import type { GraphCanvasProps, GraphCanvasViewport, GraphCanvasPosition } from '$stylist/design-system/contracts';
import { GRAPH_CANVAS_DEFAULTS } from '$stylist/design-system/defaults/information/graph-canvas';
import { GraphCanvasStyleManager } from '$stylist/design-system/styles';

export function createGraphCanvasState(props: GraphCanvasProps) {
	const width = $derived(props.width ?? 800);
	const height = $derived(props.height ?? 600);
	const zoom = $derived(props.zoom ?? 1);
	const offsetX = $derived(props.offsetX ?? 0);
	const offsetY = $derived(props.offsetY ?? 0);
	const gridSize = $derived(props.gridSize ?? GRAPH_CANVAS_DEFAULTS.gridSize);
	const gridMode = $derived(props.gridMode ?? 'dot');
	const gridColor = $derived(props.gridColor ?? GRAPH_CANVAS_DEFAULTS.gridColor);
	const backgroundColor = $derived(props.backgroundColor ?? GRAPH_CANVAS_DEFAULTS.backgroundColor);
	const snapToGrid = $derived(props.snapToGrid ?? false);

	const containerClass = $derived(GraphCanvasStyleManager.getContainerClass(props.class));
	const gridClass = $derived(GraphCanvasStyleManager.getGridClass(gridMode, props.gridClass));
	const contentClass = $derived(GraphCanvasStyleManager.getContentClass(props.contentClass));

	const transformStyle = $derived(
		`transform: translate(${offsetX}px, ${offsetY}px) scale(${zoom}); transform-origin: 0 0;`
	);

	const viewport = $derived<GraphCanvasViewport>({
		position: { x: offsetX, y: offsetY },
		zoom,
		width,
		height
	});

	const gridStyles = $derived(
		GraphCanvasStyleManager.getGridStyles(gridSize, gridColor, backgroundColor)
	);

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get zoom() {
			return zoom;
		},
		get offset() {
			return { x: offsetX, y: offsetY } as GraphCanvasPosition;
		},
		get gridSize() {
			return gridSize;
		},
		get gridMode() {
			return gridMode;
		},
		get gridColor() {
			return gridColor;
		},
		get backgroundColor() {
			return backgroundColor;
		},
		get snapToGrid() {
			return snapToGrid;
		},
		get containerClass() {
			return containerClass;
		},
		get gridClass() {
			return gridClass;
		},
		get contentClass() {
			return contentClass;
		},
		get transformStyle() {
			return transformStyle;
		},
		get viewport() {
			return viewport;
		},
		get gridStyles() {
			return gridStyles;
		}
	};
}

export default createGraphCanvasState;



