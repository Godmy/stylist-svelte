<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SliderProps } from '$stylist/design-system/props';
	import { createSliderState } from '$stylist/design-system/models/sliders.svelte';

	type Props = SliderProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const sliderState = createSliderState(props);
	let currentValue = $derived(sliderState.value);
	let previousValue = $state(sliderState.value);

	$effect(() => {
		if (previousValue !== currentValue) {
			props.onValueInput?.(currentValue);
			props.onValueChange?.(currentValue);
			props.onChange?.(currentValue);
		}
		previousValue = currentValue;
	});

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				min: _min,
				max: _max,
				step: _step,
				disabled: _disabled,
				onValueInput: _onValueInput,
				onValueChange: _onValueChange,
				onChange: _onChange,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={sliderState.containerClasses} {...restProps}>
	<div class={sliderState.trackClasses}>
		<div class={sliderState.thumbClasses} style={`left: ${sliderState.position}%`}></div>
	</div>
</div>


