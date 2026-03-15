<script lang="ts">
	import { createPinInputDigitState } from '$stylist/design-system/runtime/input-state';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';
	import type { InputVariant } from '$stylist/design-system/tokens/interaction/variants';

	type PinInputSize = (typeof COMPONENT_SIZE)[number];

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
		variant?: InputVariant;
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
			variant: variant satisfies InputVariant,
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




