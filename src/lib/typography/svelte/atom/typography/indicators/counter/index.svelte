<script lang="ts">
	import type { ThemeCounterRecipe } from '$stylist/typography/interface/recipe/counter';
	import { createCounterState } from '$stylist/typography/function/state/counter';

	let props: ThemeCounterRecipe = $props();

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

