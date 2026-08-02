import type { RecipeWbdPermissionDeniedPanel } from '$stylist/wbd/interface/recipe/permission-denied-panel';

export function createWbdPermissionDeniedPanelState(props: RecipeWbdPermissionDeniedPanel) {
	const className = $derived(props.class ?? '');

	return {
		get title() {
			return props.title ?? 'Permission denied';
		},
		get description() {
			return props.description;
		},
		get actionLabel() {
			return props.actionLabel ?? 'Go back';
		},
		get className() {
			return className;
		},
		goBack() {
			props.onGoBack?.();
		}
	};
}

export default createWbdPermissionDeniedPanelState;
