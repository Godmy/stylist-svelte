<script lang="ts">
	import type { IInputAddonProps } from '$stylist/input/interface/component/input/other';
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
	{@render props.children?.()}
</div>
