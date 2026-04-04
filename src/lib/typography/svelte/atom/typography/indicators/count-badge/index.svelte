<script lang="ts">
	import type { ThemeCountBadgeRecipe } from '$stylist/typography/interface/recipe/count-badge';
	import { createCountBadgeState } from '$stylist/typography/function/state/count-badge';

	let props: ThemeCountBadgeRecipe = $props();

	const state = createCountBadgeState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, count: _count, max: _max, showZero: _showZero, ...rest } = props;
			return rest;
		})()
	);
</script>

{#if state.showZero || state.count > 0}
	<span class={state.classes} {...restProps}>
		{state.displayCount}
	</span>
{/if}

