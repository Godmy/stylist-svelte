<script lang="ts">
	import createWbdRationaleDigestState from '$stylist/wbd/function/state/rationale-digest/index.svelte';
	import type { RecipeWbdRationaleDigest } from '$stylist/wbd/interface/recipe/rationale-digest';

	let props: RecipeWbdRationaleDigest = $props();
	const state = createWbdRationaleDigestState(props);
</script>

<section class="wbd-rationale-digest {state.className}">
	<header>
		<span>Rationales</span>
		<strong>{state.items.length}</strong>
	</header>
	<div class="wbd-rationale-digest__items">
		{#each state.items as item (item.id)}
			<article>
				<div>
					<span>R{item.roundNumber}</span>
					{#if item.consensusLevel}
						<strong>{item.consensusLevel}</strong>
					{/if}
					{#if item.confidence}
						<small>Confidence {item.confidence}/5</small>
					{/if}
				</div>
				{#if item.questionText}
					<h3>{item.questionText}</h3>
				{/if}
				<p>{item.rationale}</p>
			</article>
		{/each}
	</div>
</section>

<style>
	.wbd-rationale-digest {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-rationale-digest > header,
	.wbd-rationale-digest article div {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}
	.wbd-rationale-digest > header {
		justify-content: space-between;
	}
	.wbd-rationale-digest > header span,
	.wbd-rationale-digest article div,
	.wbd-rationale-digest small {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-rationale-digest__items {
		display: grid;
		gap: 0.625rem;
	}
	.wbd-rationale-digest article {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-rationale-digest h3,
	.wbd-rationale-digest p {
		margin: 0;
	}
	.wbd-rationale-digest h3 {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-rationale-digest p {
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-text-secondary, #475569);
	}
</style>
