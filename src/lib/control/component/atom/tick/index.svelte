<script lang="ts">
	import { createSliderTickState } from '$stylist/control/function/state/tick';
	import type { SliderTickComponentProps } from '$stylist/control/type/struct/slider-tick-component-props';

	let props: SliderTickComponentProps = $props();

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



