<script lang="ts">
	import type { StatCardRecipe } from '$stylist/information/interface/recipe/stat-card';
	import { createStatCardState } from '$stylist/information/function/state/stat-card';
	import AnimatedNumber from '$stylist/typography/svelte/atom/animation/animated-number/index.svelte';

	let props: StatCardRecipe = $props();
	const state = createStatCardState(props);
</script>

<div class={`c-stat-card ${state.classes}`}>
	{#if state.icon}
		<div class={state.iconContainerClasses}>
			<span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-600)]">{state.icon}</span>
		</div>
	{/if}

	<h3 class={state.titleClasses}>{state.label}</h3>

	<div class={state.valueClasses}>
		{#if state.animated && typeof state.value === 'number'}
			<AnimatedNumber value={state.value} />
		{:else if state.animated && typeof state.value === 'string' && state.numericValue !== null}
			<AnimatedNumber value={state.numericValue} />
		{:else}
			{state.value}
		{/if}
	</div>

	{#if state.trendValue}
		<div class={state.trendContainerClasses}>
			{#if state.trend === 'up'}
				<svg class={state.trendIconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
				</svg>
			{:else if state.trend === 'down'}
				<svg class={state.trendIconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>
			{/if}
			<span class={state.trendTextClasses}>{state.trendValue}</span>
		</div>
	{/if}

	{#if state.description}
		<p class={state.descriptionClasses}>{state.description}</p>
	{/if}
</div>













