import type { StepConnectorProps } from '$stylist/notification/type/struct/step-connector-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createStepConnectorState(props: StepConnectorProps) {
	const status = $derived(props.status ?? 'pending');
	const classes = $derived(
		joinClassNames(
			'step-connector',
			status === 'active' ? 'active' : '',
			status === 'completed' ? 'completed' : '',
			props.class ?? ''
		)
	);

	return {
		get classes() { return classes; }
	};
}

export default createStepConnectorState;
