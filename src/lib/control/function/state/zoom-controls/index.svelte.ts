import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeZoomControls } from '$stylist/control/interface/recipe/zoom-controls';

export function createZoomControlsState(props: RecipeZoomControls & HTMLAttributes<HTMLDivElement>) {
	const initialValue = $derived(props.initialValue ?? 100);
	const minZoom = $derived(props.minZoom ?? 50);
	const maxZoom = $derived(props.maxZoom ?? 200);
	const step = $derived(props.step ?? 10);
	const showPercentage = $derived(props.showPercentage ?? true);
	let currentZoom = $state(props.initialValue ?? 100);

	$effect(() => {
		currentZoom = props.initialValue ?? 100;
	});

	function applyZoom() {
		const contentContainer =
			(document.querySelector('.content-container') as HTMLElement | null) ?? document.body;
		contentContainer.style.transform = `scale(${currentZoom / 100})`;
		contentContainer.style.transformOrigin = 'top left';
		contentContainer.style.width = `${100 * (100 / currentZoom)}%`;
		contentContainer.style.height = `${100 * (100 / currentZoom)}%`;

		props.onValueInput?.(currentZoom);
		props.onValueChange?.(currentZoom);
		props.onChange?.(currentZoom);
	}

	return {
		get initialValue() {
			return initialValue;
		},
		get minZoom() {
			return minZoom;
		},
		get maxZoom() {
			return maxZoom;
		},
		get step() {
			return step;
		},
		get showPercentage() {
			return showPercentage;
		},
		get currentZoom() {
			return currentZoom;
		},
		handleZoomIn() {
			currentZoom = Math.min(currentZoom + step, maxZoom);
			applyZoom();
		},
		handleZoomOut() {
			currentZoom = Math.max(currentZoom - step, minZoom);
			applyZoom();
		},
		handleReset() {
			currentZoom = initialValue;
			applyZoom();
		},
		applyZoom
	};
}
