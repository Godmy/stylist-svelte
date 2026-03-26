<script lang="ts">
	import { createPinInputDigitState } from '$stylist/interaction/function/input-state/index';
import type { HTMLInputAttributes } from 'svelte/elements';
import { TOKEN_SIZE } from '$stylist/architecture/const/token/size';
	import type { TokenAppearance } from '$stylist/information/type/token/appearance';

	type PinInputSize = (typeof TOKEN_SIZE)[number];

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
		variant?: TokenAppearance;
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
			variant: variant satisfies TokenAppearance,
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





