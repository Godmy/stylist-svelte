import type { LazyLoaderProps } from '$stylist/notification/type/struct/lazy-loader-props';
import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';

export function createLazyLoaderState(props: LazyLoaderProps) {
	const loading = $derived(props.loading ?? true);
	const text = $derived(props.text ?? 'Loading content...');
	const containerClasses = $derived(InteractionFeedbackStyleManager.root('c-lazy-loader border rounded-lg p-4', props.class ?? ''));

	return {
		get loading() { return loading; },
		get text() { return text; },
		get containerClasses() { return containerClasses; }
	};
}

export default createLazyLoaderState;
