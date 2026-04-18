import { ZoomToolbarStyleManager } from '$stylist/control/class/style-manager/zoom-toolbar';
import type { SlotZoomToolbar as ZoomToolbarProps } from '$stylist/control/interface/slot/zoom-toolbar';

export function createZoomToolbarState(props: ZoomToolbarProps) {
	let currentZoom = $state(props.zoomLevel ?? 100);

	$effect(() => {
		currentZoom = props.zoomLevel ?? 100;
	});

	const emit = (zoom: number) => {
		currentZoom = zoom;
		props.onZoomChange?.(zoom);
	};

	const zoomIn = () => {
		emit(Math.min(currentZoom + (props.step ?? 10), props.maxZoom ?? 200));
	};

	const zoomOut = () => {
		emit(Math.max(currentZoom - (props.step ?? 10), props.minZoom ?? 50));
	};

	const resetZoom = () => {
		emit(100);
	};

	let rootClass = $derived(ZoomToolbarStyleManager.root(props.class ?? ''));
	let firstButtonClass = $derived(ZoomToolbarStyleManager.firstButton(props.buttonClass ?? ''));
	let buttonClass = $derived(ZoomToolbarStyleManager.button(props.buttonClass ?? ''));
	let percentageClass = $derived(ZoomToolbarStyleManager.percentage());

	return {
		get currentZoom() {
			return currentZoom;
		},
		get rootClass() { return rootClass; },
		get firstButtonClass() { return firstButtonClass; },
		get buttonClass() { return buttonClass; },
		get percentageClass() { return percentageClass; },
		zoomIn,
		zoomOut,
		resetZoom
	};
}

export default createZoomToolbarState;
