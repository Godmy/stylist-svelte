import type { ResponseViewerProps } from '$stylist/notification/type/struct/response-viewer-props';
import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';

export function createResponseViewerState(props: ResponseViewerProps) {
	const title = $derived(props.title ?? 'Response');
	const response = $derived(props.response ?? '{}');
	const status = $derived(props.status ?? 'info');
	const containerClasses = $derived(InteractionFeedbackStyleManager.root('c-response-viewer border rounded-lg p-4', props.class ?? ''));
	const titleClasses = $derived('font-semibold');
	const statusClasses = $derived('text-xs text-[var(--color-text-secondary)] mb-2');
	const responsePreClasses = $derived('text-xs bg-[var(--color-background-secondary)] border rounded p-2 overflow-auto');

	return {
		get title() { return title; },
		get response() { return response; },
		get status() { return status; },
		get containerClasses() { return containerClasses; },
		get titleClasses() { return titleClasses; },
		get statusClasses() { return statusClasses; },
		get responsePreClasses() { return responsePreClasses; }
	};
}

export default createResponseViewerState;
