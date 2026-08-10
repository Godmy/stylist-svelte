import type { RecipeErrorMessage } from '$stylist/notification/interface/recipe/error-message';

export function createErrorMessageState(props: RecipeErrorMessage) {
	const error = props.error;
	const title = props.title ?? 'Error';
	const onRetry = props.onRetry;
	const showRetry = props.showRetry ?? true;

	let errorMessage = $state<string | null>(null);

	$effect(() => {
		if (error) {
			errorMessage =
				typeof error === 'string' ? error : error.message || 'An unknown error occurred';
		} else {
			errorMessage = null;
		}
	});

	const containerClasses = $derived(`error-message ${props.class ?? ''}`.trim());

	return {
		error,
		title,
		onRetry,
		showRetry,
		get errorMessage() {
			return errorMessage;
		},
		get containerClasses() {
			return containerClasses;
		},
		titleClasses: 'error-message__title',
		textClasses: 'error-message__text',
		buttonClasses: 'error-message__retry-btn',
		buttonContainerClasses: 'error-message__actions'
	};
}
