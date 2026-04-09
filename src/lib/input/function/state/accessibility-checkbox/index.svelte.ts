import { createAccessibilityCheckboxState as createNotificationAccessibilityCheckboxState } from '$stylist/notification/function/state/accessibility-checkbox';

export const createInputAccessibilityCheckboxState = (
	props: {
		label?: string;
		checked?: boolean;
		disabled?: boolean;
		onValueInput?: (value: boolean) => void;
		onValueChange?: (value: boolean) => void;
		onChange?: (value: boolean) => void;
		class?: string;
	} & Record<string, unknown>
) => {
	let localChecked = $state(props.checked ?? false);

	$effect(() => {
		localChecked = props.checked ?? false;
	});

	const viewState = $derived(
		createNotificationAccessibilityCheckboxState({
			checked: localChecked,
			disabled: props.disabled ?? false,
			class: String(props.class ?? '')
		})
	);

	function handleChange() {
		if (props.disabled) {
			return;
		}

		localChecked = !localChecked;
		props.onValueInput?.(localChecked);
		props.onValueChange?.(localChecked);
		props.onChange?.(localChecked);
	}

	return {
		get checked() {
			return localChecked;
		},
		get containerClasses() {
			return viewState.containerClasses;
		},
		get indicatorClasses() {
			return viewState.indicatorClasses;
		},
		get labelClasses() {
			return viewState.labelClasses;
		},
		handleChange
	};
};

export default createInputAccessibilityCheckboxState;
