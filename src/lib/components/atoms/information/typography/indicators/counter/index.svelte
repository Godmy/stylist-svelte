<script lang="ts">
	import type { CounterProps } from '$stylist/design-system';
	import { createCounterState } from '$stylist/design-system/models/information/counter.svelte';

	let props: CounterProps = $props();

	const state = createCounterState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				count: _count,
				max: _max,
				variant: _variant,
				size: _size,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{state.displayCount}
</span>
