<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createStatsCardState from '$stylist/management/function/state/stats-card/index.svelte';
	import type { RecipeStatsCard } from '$stylist/management/interface/recipe/stats-card';

	let stateProps: RecipeStatsCard = $props();

	const state = createStatsCardState(stateProps as Parameters<typeof createStatsCardState>[0]);
</script>

<article class={state.containerClasses}>
	<div class={state.headerClasses}>
		<div>
			<p class={state.labelClasses}>{state.label}</p>
			<p class={state.valueClasses}>{state.value}</p>
		</div>

		{#if state.icon}
			<div class={state.iconWrapperClasses}>
				{@render state.icon()}
			</div>
		{/if}
	</div>

	<div class={state.footerClasses}>
		{#if state.trendValue}
			<span class={state.trendContainerClasses}>
				<BaseIcon name={state.trendIconName} class={state.trendIconClasses} />
				{state.trendValue}
			</span>
		{/if}

		{#if state.description}
			<span class={state.descriptionClasses}>{state.description}</span>
		{/if}
	</div>
</article>

<style>
</style>
