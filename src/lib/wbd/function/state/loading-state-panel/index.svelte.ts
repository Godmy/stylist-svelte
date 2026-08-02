import type { RecipeWbdLoadingStatePanel } from '$stylist/wbd/interface/recipe/loading-state-panel';

export function createWbdLoadingStatePanelState(props: RecipeWbdLoadingStatePanel) {
	const className = $derived(props.class ?? '');

	return {
		get title() {
			return props.title ?? 'Loading';
		},
		get description() {
			return props.description;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdLoadingStatePanelState;
