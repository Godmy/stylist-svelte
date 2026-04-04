import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/script/semantic-zoom/index';

export interface ViewportState {
	x: number;
	y: number;
	zoom: number;
	width: number;
	height: number;
}

export interface ViewportInput extends Partial<ViewportState> {}

export interface Bounds {
	x: number;
	y: number;
	width: number;
	height: number;
}

function useViewport(initialState?: ViewportInput) {
	let state = $state<ViewportState>({
		x: initialState?.x ?? 0,
		y: initialState?.y ?? 0,
		zoom: initialState?.zoom ?? 1,
		width: initialState?.width ?? 1920,
		height: initialState?.height ?? 1080
	});

	const pan = (dx: number, dy: number) => {
		state.x += dx;
		state.y += dy;
	};

	const zoomAtPoint = (delta: number, pointX: number, pointY: number) => {
		const oldZoom = state.zoom;
		const newZoom = Math.max(0.1, Math.min(5, state.zoom * (1 + delta)));
		const scale = newZoom / oldZoom;
		state.x = pointX - (pointX - state.x) * scale;
		state.y = pointY - (pointY - state.y) * scale;
		state.zoom = newZoom;
	};

	const zoomBy = (delta: number) => {
		state.zoom = Math.max(0.1, Math.min(5, state.zoom * (1 + delta)));
	};

	const setZoom = (zoom: number) => {
		state.zoom = Math.max(0.1, Math.min(5, zoom));
	};

	const fitToBounds = (bounds: Bounds, padding = 40) => {
		const scaleX = (state.width - padding * 2) / bounds.width;
		const scaleY = (state.height - padding * 2) / bounds.height;
		state.zoom = Math.min(scaleX, scaleY, 1);
		state.x = bounds.x + bounds.width / 2;
		state.y = bounds.y + bounds.height / 2;
	};

	const reset = () => {
		state.x = 0;
		state.y = 0;
		state.zoom = 1;
	};

	const getPresentation = (worldDepth: number) => {
		return resolveSemanticZoomPresentation(worldDepth, state.zoom);
	};

	return {
		get state() {
			return state;
		},
		get x() {
			return state.x;
		},
		get y() {
			return state.y;
		},
		get zoom() {
			return state.zoom;
		},
		get width() {
			return state.width;
		},
		get height() {
			return state.height;
		},
		pan,
		zoomAtPoint,
		zoomBy,
		setZoom,
		fitToBounds,
		reset,
		getPresentation
	};
}

export { useViewport };
export default useViewport;
