import type { LoadingBoundaryProps } from '$stylist/notification/type/struct/loading-boundary-props';
import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';

export function createLoadingBoundaryState(props: LoadingBoundaryProps) {
	const loading = $derived(props.loading ?? false);
	const error = $derived(props.error ?? '');
	const containerClasses = $derived(InteractionFeedbackStyleManager.root('c-loading-boundary border rounded-lg p-4', props.class ?? ''));

	return {
		get loading() { return loading; },
		get error() { return error; },
		get containerClasses() { return containerClasses; }
	};
}

export default createLoadingBoundaryState;
