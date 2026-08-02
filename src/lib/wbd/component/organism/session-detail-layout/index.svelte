<script lang="ts">
	import createWbdSessionDetailLayoutState from '$stylist/wbd/function/state/session-detail-layout/index.svelte';
	import type { RecipeWbdSessionDetailLayout } from '$stylist/wbd/interface/recipe/session-detail-layout';

	let props: RecipeWbdSessionDetailLayout = $props();
	const state = createWbdSessionDetailLayoutState(props);
</script>

<section class="wbd-session-detail {state.className}">
	<header class="wbd-session-detail__header">
		<div>
			<h1>{state.session.title}</h1>
			{#if state.session.description}
				<p>{state.session.description}</p>
			{/if}
		</div>
		<span>{state.session.status}</span>
	</header>

	<div class="wbd-session-detail__grid">
		<main class="wbd-session-detail__main">
			{#if props.children}
				{@render props.children()}
			{/if}
		</main>
		{#if props.sidebar}
			<aside class="wbd-session-detail__sidebar">
				{@render props.sidebar()}
			</aside>
		{/if}
	</div>
</section>

<style>
	.wbd-session-detail {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.wbd-session-detail__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	.wbd-session-detail__header h1,
	.wbd-session-detail__header p {
		margin: 0;
	}
	.wbd-session-detail__header h1 {
		font-size: 1.25rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-session-detail__header p {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-session-detail__header span {
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-session-detail__grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(16rem, 20rem);
		gap: 1rem;
		align-items: start;
	}
	.wbd-session-detail__main,
	.wbd-session-detail__sidebar {
		min-width: 0;
	}
	@media (max-width: 800px) {
		.wbd-session-detail__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
