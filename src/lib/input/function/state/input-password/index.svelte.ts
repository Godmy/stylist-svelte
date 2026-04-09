import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import { createInputTextState } from '$stylist/input/function/state/input-text';
import type { IInputPasswordProps } from '$stylist/input/interface/component/input/other';

export const createInputPasswordState = (props: IInputPasswordProps) => {
	const hasError = $derived(!!props.error || (props.errors?.length ?? 0) > 0);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const currentType = $derived(props.showPassword ? 'text' : 'password');
	const inputState = $derived(
		createInputTextState({
			variant: props.variant,
			size: props.size,
			disabled: props.disabled,
			error: hasError,
			block: props.block,
			class: props.class
		})
	);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));
	const passwordStrength = $derived.by(() => {
		const value = String(props.value ?? '');
		if (!value || !props.showPasswordStrength) {
			return null;
		}

		let strength = 0;
		if (value.length >= 8) strength++;
		if (value.length >= 12) strength++;
		if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
		if (/\d/.test(value)) strength++;
		if (/[^a-zA-Z0-9]/.test(value)) strength++;

		const labels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
		const colors = ['bg-[var(--color-danger-500)]', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-[var(--color-success-500)]'];

		return {
			value: strength,
			label: labels[Math.min(strength, 4)],
			color: colors[Math.min(strength, 4)],
			percentage: (strength / 5) * 100
		};
	});

	return {
		get hasError() {
			return hasError;
		},
		get errorId() {
			return errorId;
		},
		get labelId() {
			return labelId;
		},
		get currentType() {
			return currentType;
		},
		get inputClasses() {
			return inputState.classes;
		},
		get containerClasses() {
			return InputStyleManager.getContainerClass('');
		},
		get labelClasses() {
			return InputStyleManager.getLabelClass('');
		},
		get helperTextClasses() {
			return InputStyleManager.getHelperTextClass('');
		},
		get errorTextClasses() {
			return InputStyleManager.getErrorTextClass('');
		},
		get requiredIndicatorClasses() {
			return InputStyleManager.getRequiredIndicatorClass('');
		},
		get passwordToggleClasses() {
			return InputStyleManager.getPasswordToggleClass('');
		},
		get showHelper() {
			return showHelper;
		},
		get passwordStrength() {
			return passwordStrength;
		}
	};
};

export default createInputPasswordState;
