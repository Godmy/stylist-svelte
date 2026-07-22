import type { StepperProps } from '$stylist/navigation/type/struct/stepper-props/stepper-props';

export function createStepperState(props: StepperProps) {
	const orientationClass = $derived(
		props.orientation === 'vertical' ? 'stepper--col' : 'stepper--row'
	);

	function getStepCircleClass(status: string): string {
		return `stepper__circle stepper__circle--${status}`;
	}

	function getStepLabelClass(status: string): string {
		return `stepper__label-text stepper__label-text--${status}`;
	}

	function getStepDescriptionClass(status: string): string {
		return `stepper__description stepper__description--${status}`;
	}

	function getConnectorClass(steps: StepperProps['steps'], index: number): string {
		const nextStatus = steps[index + 1]?.status;
		return nextStatus === 'completed' ? 'stepper__connector--completed' : '';
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
