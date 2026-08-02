import type { RecipeWbdErrorStatePanel } from '$stylist/wbd/interface/recipe/error-state-panel';

export function createWbdErrorStatePanelState(props: RecipeWbdErrorStatePanel) {
	const className = $derived(props.class ?? '');

	return {
		get title() {
			return props.title;
		},
		get description() {
			return props.description;
		},
		get retryLabel() {
			return props.retryLabel ?? 'Retry';
		},
		get className() {
			return className;
		},
		retry() {
			props.onRetry?.();
		}
	};
}

export default createWbdErrorStatePanelState;
