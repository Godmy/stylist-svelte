<script lang="ts">
	import { PIN_INPUT_DIGIT_PRESET } from '$stylist/design-system/presets';
	import { createPinInputDigitState } from '../state.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { IInputProps } from '$stylist/design-system/attributes';

	/**
	 * PinInputDigit component - displays a single digit input for PIN codes
	 *
	 * @param size - Size of the input ('sm' | 'md' | 'lg')
	 * @param focused - Whether the digit is focused
	 * @param invalid - Whether the digit is invalid
	 * @returns An accessible, styled single digit input
	 */

	type PinInputVariant = (typeof PIN_INPUT_DIGIT_PRESET.variants)[number];
	type PinInputSize = (typeof PIN_INPUT_DIGIT_PRESET.sizes)[number];

	type InputAttributes = Omit<HTMLInputAttributes, 'size'>;

	let {
		id,
		label,
		errors,
		focused = false,
		invalid = false,
		class: className = '',
		variant = PIN_INPUT_DIGIT_PRESET.defaults.variant,
		size = PIN_INPUT_DIGIT_PRESET.defaults.size,
		value = '',
		onChange,
		onFocus,
		onBlur,
		onKeyDown,
		...restProps
	}: IInputProps & {
		focused?: boolean;
		invalid?: boolean;
		value?: string;
		variant?: PinInputVariant;
		size?: PinInputSize;
		onChange?: (value: string, index: number) => void;
		onFocus?: (index: number) => void;
		onBlur?: () => void;
		onKeyDown?: (e: KeyboardEvent, index: number) => void;
	} & InputAttributes = $props();
	const state = $derived(
		createPinInputDigitState({ variant, size, error: invalid, class: className })
	);

	let classes = $derived(
		[state.classes, focused ? 'ring-2 ring-blue-500' : ''].filter(Boolean).join(' ')
	);
</script>

<input class={classes} maxLength={1} {value} {...restProps} />
