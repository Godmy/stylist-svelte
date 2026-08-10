import type { RecipeZoomToolbar } from '$stylist/control/interface/recipe/zoom-toolbar';

export function createZoomToolbarState(props: RecipeZoomToolbar) {
	let currentZoom = $state(props.zoomLevel ?? 100);

	$effect(() => {
		currentZoom = props.zoomLevel ?? 100;
	});

	function emit(zoom: number) {
		currentZoom = zoom;
		props.onZoomChange?.(zoom);
	}

	function zoomIn() {
		emit(Math.min(currentZoom + (props.step ?? 10), props.maxZoom ?? 200));
	}

	function zoomOut() {
		emit(Math.max(currentZoom - (props.step ?? 10), props.minZoom ?? 50));
	}

	function resetZoom() {
		emit(100);
	}

	const rootClass = $derived(['c-zoom-toolbar', props.class].filter(Boolean).join(' '));

	return {
		get currentZoom() {
			return currentZoom;
		},
		get rootClass() {
			return rootClass;
		},
		zoomIn,
		zoomOut,
		resetZoom
	};
}
