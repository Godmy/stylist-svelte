import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import { AdvancedPasswordInputStyleManager } from '$stylist/input/class/style-manager/advanced-password-input';
import type { IAdvancedPasswordInputProps } from '$stylist/input/interface/component/advanced-password-input/other';

export const createAdvancedPasswordInputState = (
	props: IAdvancedPasswordInputProps & InteractionHTMLAttributes<HTMLInputElement>
) => {
	let showPassword = $state(false);
	let inputValue = $state(props.value ?? '');

	$effect(() => {
		inputValue = props.value ?? '';
	});

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		inputValue = target.value;
		props.onInput?.(inputValue);
		props.onValueInput?.(inputValue);
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		inputValue = target.value;
		props.onChange?.(inputValue);
		props.onValueChange?.(inputValue);
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	function getPasswordStrength() {
		if (!inputValue) return 0;

		let strength = 0;
		if (inputValue.length >= 8) strength += 1;
		if (/[A-Z]/.test(inputValue)) strength += 1;
		if (/[0-9]/.test(inputValue)) strength += 1;
		if (/[^A-Za-z0-9]/.test(inputValue)) strength += 1;

		return Math.min(strength, 4);
	}

	function getStrengthLabel() {
		switch (getPasswordStrength()) {
			case 0:
				return 'Empty';
			case 1:
				return 'Very Weak';
			case 2:
				return 'Weak';
			case 3:
				return 'Medium';
			case 4:
				return 'Strong';
			default:
				return 'Unknown';
		}
	}

	const containerClass = $derived(AdvancedPasswordInputStyleManager.getContainerClass(props.class));
	const inputWrapperClass = $derived(AdvancedPasswordInputStyleManager.getInputWrapperClass());
	const inputClass = $derived(
		AdvancedPasswordInputStyleManager.getInputClass(props.disabled ?? false, props.inputClass)
	);
	const buttonClass = $derived(
		AdvancedPasswordInputStyleManager.getToggleButtonClass(props.disabled ?? false, props.buttonClass)
	);
	const eyeIconClass = $derived(AdvancedPasswordInputStyleManager.getEyeIconClass());
	const strengthMeterContainerClass = $derived(
		AdvancedPasswordInputStyleManager.getStrengthMeterContainerClass()
	);
	const strengthLabelsContainerClass = $derived(
		AdvancedPasswordInputStyleManager.getStrengthLabelsContainerClass()
	);
	const strengthLabelClass = $derived(AdvancedPasswordInputStyleManager.getStrengthLabelClass());
	const strengthValueClass = $derived(
		AdvancedPasswordInputStyleManager.getStrengthValueClass(getPasswordStrength())
	);
	const strengthMeterBgClass = $derived(
		AdvancedPasswordInputStyleManager.getStrengthMeterBackgroundClass()
	);
	const strengthMeterFillClass = $derived(
		AdvancedPasswordInputStyleManager.getStrengthMeterFillClass(getPasswordStrength())
	);

	return {
		get value() {
			return inputValue;
		},
		set value(value: string) {
			inputValue = value;
		},
		get showPassword() {
			return showPassword;
		},
		get type() {
			return showPassword ? 'text' : 'password';
		},
		get placeholder() {
			return props.placeholder ?? 'Enter password';
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get readonly() {
			return props.readonly ?? false;
		},
		get showStrengthMeter() {
			return props.showStrengthMeter ?? false;
		},
		get strength() {
			return getPasswordStrength();
		},
		get strengthLabel() {
			return getStrengthLabel();
		},
		get containerClass() {
			return containerClass;
		},
		get inputWrapperClass() {
			return inputWrapperClass;
		},
		get inputClass() {
			return inputClass;
		},
		get buttonClass() {
			return buttonClass;
		},
		get eyeIconClass() {
			return eyeIconClass;
		},
		get strengthMeterContainerClass() {
			return strengthMeterContainerClass;
		},
		get strengthLabelsContainerClass() {
			return strengthLabelsContainerClass;
		},
		get strengthLabelClass() {
			return strengthLabelClass;
		},
		get strengthValueClass() {
			return strengthValueClass;
		},
		get strengthMeterBgClass() {
			return strengthMeterBgClass;
		},
		get strengthMeterFillClass() {
			return strengthMeterFillClass;
		},
		handleInput,
		handleChange,
		togglePasswordVisibility
	};
};

export default createAdvancedPasswordInputState;
