<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SliderProps } from '$stylist/design-system/props';
	import { createSliderState } from './state';

	type Props = SliderProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const state = createSliderState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, value: _value, min: _min, max: _max, step: _step, disabled: _disabled, ...rest } = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClasses} {...restProps}>
	<div class={state.trackClasses}>
		<div class={state.thumbClasses} style={`left: ${state.position}%`}></div>
	</div>
</div>