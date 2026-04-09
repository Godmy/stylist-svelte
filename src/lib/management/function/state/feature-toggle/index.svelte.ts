import { FeatureToggleStyleManager } from '$stylist/management/class/style-manager/feature-toggle';
import type { FeatureToggleProps } from '$stylist/management/interface/component/feature-toggle/other';

export interface FeatureToggleStateProps extends FeatureToggleProps {}

export function createFeatureToggleState(props: FeatureToggleStateProps) {
	const label = $derived(props.label ?? 'Feature toggle');
	const description = $derived(props.description ?? 'Enable optional capability');
	const checked = $derived(props.checked ?? false);
	const disabled = $derived(props.disabled ?? false);
	const className = $derived(props.class ?? '');

	let isChecked = $state(checked);

	const containerClasses = $derived(FeatureToggleStyleManager.root(className));

	function handleChange(): void {
		isChecked = !isChecked;
		props.onChange?.(isChecked);
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			description: _description,
			checked: _checked,
			disabled: _disabled,
			onChange: _onChange,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() { return label; },
		get description() { return description; },
		get checked() { return checked; },
		get disabled() { return disabled; },
		get isChecked() { return isChecked; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; },
		handleChange
	};
}

export default createFeatureToggleState;
