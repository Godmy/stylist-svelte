<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import type { SliderTickProps } from '$stylist/design-system/contracts';
	import { createSliderTickState } from '$stylist/design-system/models/interaction/tick.svelte';

	type Props = SliderTickProps & InteractionHTMLAttributes<HTMLDivElement>;

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




