import type { RecipeWbdMutationStatusToast } from '$stylist/wbd/interface/recipe/mutation-status-toast';

export function createWbdMutationStatusToastState(props: RecipeWbdMutationStatusToast) {
	const className = $derived(props.class ?? '');

	return {
		get statuses() {
			return props.statuses;
		},
		get className() {
			return className;
		},
		dismiss(statusId: string) {
			props.onDismissStatus?.(statusId);
		}
	};
}

export default createWbdMutationStatusToastState;
