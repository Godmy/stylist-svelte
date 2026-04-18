import { FocusableStyleManager } from '$stylist/interaction/class/style-manager/focusable';
import type { SlotFocusable as FocusProps } from '$stylist/interaction/interface/slot/focusable';

export const createFocusableState = (props: FocusProps) => {
	// SlotState
	let isFocused = $state(false);

	// Вычисляемые классы
	const classes = $derived.by(() =>
		FocusableStyleManager.getClasses({
			focusEffect: props.focusEffect,
			isFocused,
			disabled: props.disabled,
			class: props.class
		})
	);

	// Извлечение rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			onFocus,
			onBlur,
			disabled,
			focusEffect,
			...rest
		} = props;
		return rest;
	});

	// Обработчики
	function handleFocus(event: FocusEvent) {
		if (!props.disabled) {
			isFocused = true;
			props.onFocus?.(event);
		}
	}

	function handleBlur(event: FocusEvent) {
		if (!props.disabled) {
			isFocused = false;
			props.onBlur?.(event);
		}
	}

	return {
		// SlotState getters
		get isFocused() {
			return isFocused;
		},
		get disabled() {
			return props.disabled;
		},

		// SlotState
		get classes() { return classes; },
		get restProps() { return restProps; },

		// Handlers
		handleFocus,
		handleBlur
	};
};

export default createFocusableState;
