import type { StateProps } from '$stylist/notification/type/struct/state-props';

export function createStateState(props: StateProps) {
	const title = $derived(props.title);
	const description = $derived(props.description);
	const action = $derived(props.action);
	const containerClasses = $derived(`text-center py-12 ${props.class ?? ''}`);
	const titleClasses = $derived('mt-2 text-sm font-medium text-[var(--color-text-primary)]');
	const descriptionClasses = $derived('mt-1 text-sm text-[var(--color-text-secondary)] max-w-md mx-auto');
	const actionContainerClasses = $derived('mt-6');
	const actionButtonClasses = $derived('inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500');
	const iconClasses = $derived('mx-auto h-12 w-12 text-[var(--color-text-tertiary)]');
	const actionIconClasses = $derived('-ml-1 mr-2 h-5 w-5');

	return {
		get title() { return title; },
		get description() { return description; },
		get action() { return action; },
		get containerClasses() { return containerClasses; },
		get titleClasses() { return titleClasses; },
		get descriptionClasses() { return descriptionClasses; },
		get actionContainerClasses() { return actionContainerClasses; },
		get actionButtonClasses() { return actionButtonClasses; },
		get iconClasses() { return iconClasses; },
		get actionIconClasses() { return actionIconClasses; }
	};
}

export default createStateState;
