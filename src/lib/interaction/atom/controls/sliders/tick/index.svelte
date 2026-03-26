<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	import type { SliderTickProps } from '$stylist';
	import { createSliderTickState } from '$stylist/interaction/state/tick';

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




