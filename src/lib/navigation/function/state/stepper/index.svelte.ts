import type { StepperProps } from '$stylist/navigation/type/struct/stepper-props';

export function createStepperState(props: StepperProps) {
	const orientationClass = $derived(props.orientation === 'vertical' ? 'flex flex-col' : 'flex');

	function getStepCircleClass(status: string): string {
		const base = 'flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border-2';
		if (status === 'completed') return `${base} bg-[var(--color-primary-500)] border-[var(--color-primary-500)] text-[var(--color-text-inverse)]`;
		if (status === 'current') return `${base} bg-[var(--color-background-primary)] border-[var(--color-primary-500)] text-[var(--color-primary-500)]`;
		return `${base} bg-[var(--color-background-primary)] border-[var(--color-border-primary)] text-[var(--color-text-secondary)]`;
	}

	function getStepLabelClass(status: string): string {
		if (status === 'current') return 'text-[var(--color-primary-600)]';
		if (status === 'completed') return 'text-[var(--color-text-primary)]';
		return 'text-[var(--color-text-secondary)]';
	}

	function getStepDescriptionClass(status: string): string {
		if (status === 'current') return 'text-[var(--color-primary-600)]';
		if (status === 'completed') return 'text-[var(--color-text-secondary)]';
		return 'text-[var(--color-text-tertiary)]';
	}

	function getConnectorClass(steps: StepperProps['steps'], index: number): string {
		const nextStatus = steps[index + 1]?.status;
		if (nextStatus === 'completed') return 'bg-[var(--color-primary-500)]';
		return 'bg-[var(--color-background-tertiary)]';
	}

	return {
		get orientationClass() {
			return orientationClass;
		},
		getStepCircleClass,
		getStepLabelClass,
		getStepDescriptionClass,
		getConnectorClass
	};
}
 
 
export default createStepperState;
