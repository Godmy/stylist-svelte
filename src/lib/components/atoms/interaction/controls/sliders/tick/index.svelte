<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SliderTickProps } from '$stylist/design-system/props';
	import { createSliderTickState } from '$stylist/design-system/models/tick.svelte';

	type Props = SliderTickProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const state = createSliderTickState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, value: _value, position: _position, active: _active, label: _label, ...rest } = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClasses} style={`left: ${state.position}%`} {...restProps}>
	{#if state.label}
		<span>{state.label}</span>
	{:else}
		{state.value}
	{/if}
</div>


