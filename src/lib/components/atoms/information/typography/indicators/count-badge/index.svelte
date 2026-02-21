<script lang="ts">
	import type { CountBadgeProps } from '$stylist/design-system';
	import { createCountBadgeState } from '$stylist/design-system/models/information/count-badge.svelte';

	let props: CountBadgeProps = $props();

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
