<script lang="ts">
	import createWbdDisagreementPromptCardState from '$stylist/wbd/function/state/disagreement-prompt-card/index.svelte';
	import type { RecipeWbdDisagreementPromptCard } from '$stylist/wbd/interface/recipe/disagreement-prompt-card';

	let props: RecipeWbdDisagreementPromptCard = $props();
	const state = createWbdDisagreementPromptCardState(props);
</script>

<article class="wbd-disagreement-prompt {state.className}">
	<header>
		<span>{state.item.category ?? 'General'}</span>
		<strong>{state.item.consensusLevel} consensus</strong>
	</header>
	<h3>{state.item.questionText}</h3>
	<p>
		Median {state.item.median ?? '-'}, range {state.item.minValue ?? '-'} to {state.item.maxValue ?? '-'}
		{#if state.spread !== undefined}
			<span>Spread {state.spread}</span>
		{/if}
	</p>
</article>

<style>
	.wbd-disagreement-prompt {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-secondary, #f8fafc);
	}
	.wbd-disagreement-prompt header {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.wbd-disagreement-prompt header span,
	.wbd-disagreement-prompt p {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-disagreement-prompt header strong {
		font-size: 0.6875rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-disagreement-prompt h3,
	.wbd-disagreement-prompt p {
		margin: 0;
	}
	.wbd-disagreement-prompt h3 {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-disagreement-prompt p {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
