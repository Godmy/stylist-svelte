<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import { createSliderTickState } from '$stylist/control/function/state/tick';

	type SliderTickProps = {
		value?: number;
		position?: number;
		active?: boolean;
		label?: string;
		class?: string;
	};

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



