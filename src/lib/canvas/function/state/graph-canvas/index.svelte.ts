import type {
	GraphCanvasRecipe as GraphCanvasProps,
	GraphCanvasViewport,
	GraphCanvasPosition
} from '$stylist/information/interface/recipe/graph-canvas';
import { DEFAULT_GRAPH_CANVAS } from '$stylist/information/const/struct/graph-canvas';
import { GraphCanvasStyleManager } from '$stylist/canvas/class/style-manager/graph-canvas';

export function createGraphCanvasState(props: GraphCanvasProps) {
	const width = $derived(props.width ?? 800);
	const height = $derived(props.height ?? 600);
	const zoom = $derived(props.zoom ?? 1);
	const offsetX = $derived(props.offsetX ?? 0);
	const offsetY = $derived(props.offsetY ?? 0);
	const gridSize = $derived(props.gridSize ?? DEFAULT_GRAPH_CANVAS.gridSize);
	const gridMode = $derived((props.gridMode ?? 'dot') as 'dot' | 'number' | 'x' | 'letter' | 'check');
	const gridColor = $derived(props.gridColor ?? DEFAULT_GRAPH_CANVAS.gridColor);
	const backgroundColor = $derived(props.backgroundColor ?? DEFAULT_GRAPH_CANVAS.backgroundColor);
	const snapToGrid = $derived(props.snapToGrid ?? false);

	const containerClass = $derived(
		GraphCanvasStyleManager.getContainerClass(
			props.class == null ? undefined : String(props.class)
		)
	);
	const gridClass = $derived(GraphCanvasStyleManager.getGridClass(gridMode, props.gridClass ?? undefined));
	const contentClass = $derived(GraphCanvasStyleManager.getContentClass(props.contentClass ?? undefined));

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
		},
		get restProps() {
			const {
				width: _w,
				height: _h,
				zoom: _z,
				offsetX: _ox,
				offsetY: _oy,
				gridSize: _gs,
				gridMode: _gm,
				gridColor: _gc,
				backgroundColor: _bg,
				snapToGrid: _stg,
				class: _c,
				gridClass: _gcl,
				contentClass: _cc,
				children: _ch,
				...rest
			} = props;
			return rest;
		}
	};
}

export default createGraphCanvasState;




