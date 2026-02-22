<script lang="ts">
	import { createPinInputDigitState } from '$stylist/design-system/models/interaction/input-pin-digit.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { PinInputVariant } from '$stylist/design-system/contracts';
	import { COMPACT_SIZE_SCALE } from '$stylist/design-system/tokens/architecture/sizes';

	/**
	 * PinInputDigit component - displays a single digit input for PIN codes
	 *
	 * @param size - Size of the input ('sm' | 'md' | 'lg')
	 * @param focused - Whether the digit is focused
	 * @param invalid - Whether the digit is invalid
	 * @returns An accessible, styled single digit input
	 */

	type PinInputSize = (typeof COMPACT_SIZE_SCALE)[number];

	type InputAttributes = Omit<
		HTMLInputAttributes,
		'size' | 'class' | 'onchange' | 'onfocus' | 'onblur' | 'onkeydown'
	>;

	type PinInputDigitProps = {
		id?: string;
		label?: string;
		errors?: string[];
		focused?: boolean;
		invalid?: boolean;
		class?: string;
		variant?: PinInputVariant;
		size?: PinInputSize;
		value?: string;
		onChange?: (value: string, index: number) => void;
		onFocus?: (index: number) => void;
		onBlur?: () => void;
		onKeyDown?: (e: KeyboardEvent, index: number) => void;
	} & InputAttributes;

	let {
		id,
		label,
		errors,
		focused = false,
		invalid = false,
		class: className = '',
		variant = 'default',
		size = 'md',
		value = '',
		onChange,
		onFocus,
		onBlur,
		onKeyDown,
		...restProps
	}: PinInputDigitProps = $props();
	const pinInputState = $derived(
		createPinInputDigitState({
			variant: variant satisfies PinInputVariant,
			size,
			error: invalid,
			class: className
		})
	);

	let classes = $derived(
		[pinInputState.classes, focused ? 'ring-2 ring-blue-500' : ''].filter(Boolean).join(' ')
	);
</script>

<input class={classes} maxLength={1} {value} {...restProps} />






