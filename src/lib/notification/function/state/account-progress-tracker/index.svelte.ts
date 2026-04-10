import type { AccountProgressTrackerProps } from '$stylist/notification/type/struct/account-progress-tracker-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createAccountProgressTrackerState(props: AccountProgressTrackerProps) {
	let localCurrentStep = $state(props.currentStep ?? 0);

	$effect(() => {
		localCurrentStep = props.currentStep ?? 0;
	});

	const steps = $derived(props.steps ?? []);
	const containerClasses = $derived(joinClassNames('account-progress-tracker-container', props.class ?? ''));

	function getStepClasses(i: number): string {
		return i <= localCurrentStep
			? 'flex h-8 w-8 items-center justify-center rounded-full bg-[--color-primary-500] text-[var(--color-text-inverse)]'
			: 'flex h-8 w-8 items-center justify-center rounded-full border-2 border-[--color-border-primary]';
	}

	function getConnectorClasses(i: number): string {
		return i < localCurrentStep
			? 'mx-2 h-1 w-16 bg-[--color-primary-500]'
			: 'mx-2 h-1 w-16 border-b-2 border-[--color-border-primary]';
	}

	return {
		get localCurrentStep() {
			return localCurrentStep;
		},
		get steps() {
			return steps;
		},
		get containerClasses() {
			return containerClasses;
		},
		getStepClasses,
		getConnectorClasses
	};
}

export default createAccountProgressTrackerState;
