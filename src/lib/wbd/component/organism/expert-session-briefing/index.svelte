<script lang="ts">
	import createWbdExpertSessionBriefingState from '$stylist/wbd/function/state/expert-session-briefing/index.svelte';
	import type { RecipeWbdExpertSessionBriefing } from '$stylist/wbd/interface/recipe/expert-session-briefing';

	let props: RecipeWbdExpertSessionBriefing = $props();
	const state = createWbdExpertSessionBriefingState(props);
</script>

<section class="wbd-briefing {state.className}">
	<div class="wbd-briefing__heading">
		<span>Round {state.props.currentRound} of {state.props.maxRounds}</span>
		<h2>{state.props.sessionTitle}</h2>
	</div>
	{#if state.props.description}
		<p>{state.props.description}</p>
	{/if}
	{#if state.props.assumptions}
		<div class="wbd-briefing__assumptions">
			<strong>Assumptions</strong>
			<p>{state.props.assumptions}</p>
		</div>
	{/if}
	<div class="wbd-briefing__meta">
		<span>{state.props.questionCount} questions</span>
		{#if state.props.deadline}
			<span>Deadline {state.props.deadline}</span>
		{/if}
	</div>
</section>

<style>
	.wbd-briefing {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-briefing__heading {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.wbd-briefing__heading span,
	.wbd-briefing__meta,
	.wbd-briefing__assumptions strong {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-briefing__heading h2,
	.wbd-briefing p {
		margin: 0;
	}
	.wbd-briefing__heading h2 {
		font-size: 1.125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-briefing p {
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-briefing__assumptions {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-secondary, #f8fafc);
	}
	.wbd-briefing__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
</style>
