<script lang="ts">
	import type { SlotInputAddon as IInputAddonProps } from '$stylist/input/interface/slot/input-addon';
	import { createInputAddonState } from '$stylist/input/function/state/input-addon';

	let props: IInputAddonProps & { position?: 'left' | 'right' } = $props();
	const state = createInputAddonState({
		variant: props.variant,
		size: 'md',
		class: props.class
	});
	const classes = $derived([
		state.classes,
		(props.position ?? 'left') === 'left'
			? 'rounded-l-md border-r border-r-transparent'
			: 'rounded-r-md border-l border-l-transparent'
	].filter(Boolean).join(' '));
</script>

<div class={classes}>
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
</div>
