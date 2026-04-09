<script lang="ts">
	import type { IPinInputDigitProps } from '$stylist/input/interface/component/input/other';
	import { createPinInputDigitState } from '$stylist/input/function/state/input-pin-digit';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let props: IPinInputDigitProps &
		Omit<HTMLInputAttributes, 'size' | 'class' | 'onchange' | 'onfocus' | 'onblur' | 'onkeydown'> & {
			focused?: boolean;
			invalid?: boolean;
			variant?: string;
			size?: 'sm' | 'md' | 'lg';
		} = $props();
	const state = createPinInputDigitState({
		variant: (props.variant ?? 'default') as 'default' | 'neutral' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'error' | 'ghost' | 'link' | 'flat' | 'solid' | 'elevated' | 'outline' | 'subtle' | 'gray' | 'dark' | 'light',
		size: props.size ?? 'md',
		error: props.invalid,
		class: props.class
	});
	const classes = $derived([
		state.classes,
		props.focused ? 'ring-2 ring-blue-500' : ''
	].filter(Boolean).join(' '));
</script>

<input class={classes} maxLength={1} value={props.value} />
