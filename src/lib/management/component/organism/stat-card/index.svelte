<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipeStatCard } from '$stylist/management/interface/recipe/stat-card';
	import createStatCardState from '$stylist/management/function/state/stat-card/index.svelte';
	import AnimatedNumber from '$stylist/animation/component/atom/animated-number/index.svelte';

	let props: RecipeStatCard & HTMLAttributes<HTMLDivElement> = $props();
	const state = createStatCardState(props);
</script>

<div class="c-stat-card ${state.classes}">
	{#if state.icon}
		<div class="stat-card__icon-container">
			<span class="_c1">{state.icon}</span>
		</div>
	{/if}

	<h3 class="stat-card__title">{state.label}</h3>

	<div class="stat-card__value">
		{#if state.animated && typeof state.value === 'number'}
			<AnimatedNumber value={state.value} />
		{:else if state.animated && typeof state.value === 'string' && state.numericValue !== null}
			<AnimatedNumber value={state.numericValue} />
		{:else}
			{state.value}
		{/if}
	</div>

	{#if state.trendValue}
		<div class="stat-card__trend-container">
			{#if state.trend === 'up'}
				<svg
					class="stat-card__trend-icon"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"
					></path>
				</svg>
			{:else if state.trend === 'down'}
				<svg
					class="stat-card__trend-icon"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			{/if}
			<span class="stat-card__trend-text">{state.trendValue}</span>
		</div>
	{/if}

	{#if state.description}
		<p class="stat-card__description">{state.description}</p>
	{/if}
</div>

<style>
	._c1 {
		display: inline-flex;
		height: 2rem;
		width: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background-color: var(--color-primary-100);
		color: var(--color-primary-600);
	}

	.stat-card__base {
		padding: 1.5rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
	}

	.stat-card__icon-container {
		margin-bottom: 1rem;
	}

	.stat-card__title {
		margin-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.stat-card__value {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.stat-card__trend-container {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
	}

	.stat-card__trend-text {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
	}

	.stat-card__trend-icon {
		margin-right: 0.25rem;
		height: 0.75rem;
		width: 0.75rem;
	}

	.stat-card__description {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
</style>
