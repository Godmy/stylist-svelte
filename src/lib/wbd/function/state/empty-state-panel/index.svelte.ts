import type { RecipeWbdEmptyStatePanel } from '$stylist/wbd/interface/recipe/empty-state-panel';

export function createWbdEmptyStatePanelState(props: RecipeWbdEmptyStatePanel) {
	const className = $derived(props.class ?? '');

	return {
		get title() {
			return props.title;
		},
		get description() {
			return props.description;
		},
		get actionLabel() {
			return props.actionLabel;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdEmptyStatePanelState;
