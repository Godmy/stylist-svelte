<script lang="ts">
	import NumberedStep from '$stylist/layout/component/atom/numbered-step/index.svelte';
	import type { RecipeNumberedStepGrid } from '$stylist/layout/interface/recipe/numbered-step-grid';

	let props: RecipeNumberedStepGrid = $props();

	const columns = $derived(props.columns ?? 3);
</script>

<section class={['layout-numbered-step-grid', props.class].filter(Boolean).join(' ')}>
	{#if props.kicker || props.title}
		<header class="layout-numbered-step-grid__heading">
			{#if props.kicker}
				<p class="layout-numbered-step-grid__kicker">{props.kicker}</p>
			{/if}
			{#if props.title}
				<h2 class="layout-numbered-step-grid__title">{props.title}</h2>
			{/if}
		</header>
	{/if}

	<ol class="layout-numbered-step-grid__list" style:--numbered-step-grid-columns={columns}>
		{#each props.steps as step, i (step.title)}
			<NumberedStep index={i + 1} title={step.title} text={step.text} />
		{/each}
	</ol>
</section>

<style>
	.layout-numbered-step-grid__heading {
		margin-bottom: clamp(1.5rem, 1rem + 2vw, 2.5rem);
	}

	.layout-numbered-step-grid__kicker {
		margin: 0 0 0.5rem;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--numbered-step-grid-kicker-color, currentColor);
	}

	.layout-numbered-step-grid__title {
		margin: 0;
		font-size: var(--numbered-step-grid-title-size, clamp(1.5rem, 1rem + 2vw, 2.25rem));
		color: var(--numbered-step-grid-title-color, currentColor);
	}

	.layout-numbered-step-grid__list {
		display: grid;
		grid-template-columns: repeat(var(--numbered-step-grid-columns, 3), 1fr);
		gap: clamp(1.5rem, 0.5rem + 4vw, 3.5rem);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 820px) {
		.layout-numbered-step-grid__list {
			grid-template-columns: 1fr;
		}
	}
</style>
